"use client"

import { useForm } from "@tanstack/react-form"
import { useState, useRef } from "react"
import { Loader2 } from "lucide-react"
import Turnstile from "@marsidev/react-turnstile"

function FieldError({ field }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <p className="text-sm text-red-500 mt-1">{field.state.meta.errors.join(", ")}</p>
      ) : null}
    </>
  )
}

function ContactForm() {
  const [formStatus, setFormStatus] = useState({
    status: "idle",
    message: "",
    errors: {},
  })
  const [turnstileToken, setTurnstileToken] = useState("")
  const turnstileRef = useRef(null)

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      try {
        setFormStatus({ status: "idle", message: "", errors: {} })

        const formData = new FormData()
        formData.append("name", `${value.firstName} ${value.lastName}`)
        formData.append("email", value.email)
        formData.append("phone", value.phone)
        formData.append("subject", "Contact Form Submission")
        formData.append("message", value.message)
        formData.append("cf-turnstile-response", turnstileToken)

        const response = await fetch("https://forms.schoodic.io/submit/aa6e5999-a1d3-4d61-8120-edc5cb4578f0", {
          method: "POST",
          body: formData,
        })

        const result = await response.json()

        if (result.success) {
          setFormStatus({
            status: "success",
            message: result.message || "Your message has been sent successfully!",
            errors: {},
          })
          form.reset()
          setTurnstileToken("")
          if (turnstileRef.current) {
            turnstileRef.current.reset()
          }
        } else {
          setFormStatus({
            status: "error",
            message: result.message || "There was an error submitting the form.",
            errors: result.errors || {},
          })

          if (result.errors) {
            const fieldMapping = {
              name: "firstName",
              email: "email",
              phone: "phone",
              message: "message",
            }

            Object.entries(result.errors).forEach(([field, error]) => {
              const mappedField = fieldMapping[field]
              if (mappedField) {
                const fieldApi = form.getFieldApi(mappedField)
                if (fieldApi) {
                  fieldApi.setMeta({
                    ...fieldApi.state.meta,
                    errors: [error],
                  })
                }
              }
            })
          }
        }
      } catch (error) {
        setFormStatus({
          status: "error",
          message: "There was a problem connecting to the server. Please try again later.",
          errors: {},
        })
      }
    },
  })

  const handlePhoneChange = (e, field) => {
    const input = e.target.value
    field.handleChange(input)
  }

  const handlePhoneBlur = (e, field) => {
    field.handleBlur()
    const input = e.target.value

    if (input) {
      const numbers = input.replace(/\D/g, "")
      let formatted = numbers
      if (numbers.length >= 10) {
        formatted = `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`
      }
      field.handleChange(formatted)
    }
  }

  const renderForm = () => (
    <div className="space-y-4">
      {formStatus.status === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
          <p className="font-medium">Success</p>
          <p>{formStatus.message}</p>
        </div>
      )}

      {formStatus.status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
          <p className="font-medium">Error</p>
          <p>{formStatus.message}</p>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <form.Field
              name="firstName"
              validators={{
                onChange: ({ value }) => (!value ? "First name is required" : undefined),
              }}
            >
              {(field) => (
                <div>
                  <label htmlFor={field.name} className="block mb-1 text-sm font-medium">
                    First Name
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={`w-full p-2 border ${field.state.meta.errors.length ? "border-red-500" : "border-gray-300"} rounded-md`}
                  />
                  <FieldError field={field} />
                </div>
              )}
            </form.Field>
          </div>

          <div>
            <form.Field
              name="lastName"
              validators={{
                onChange: ({ value }) => (!value ? "Last name is required" : undefined),
              }}
            >
              {(field) => (
                <div>
                  <label htmlFor={field.name} className="block mb-1 text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className={`w-full p-2 border ${field.state.meta.errors.length ? "border-red-500" : "border-gray-300"} rounded-md`}
                  />
                  <FieldError field={field} />
                </div>
              )}
            </form.Field>
          </div>
        </div>

        <div>
          <form.Field
            name="phone"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Phone number is required"
                const digitsOnly = value.replace(/\D/g, "")
                if (digitsOnly.length < 10) return "Please enter a valid phone number"
                return undefined
              },
            }}
          >
            {(field) => (
              <div>
                <label htmlFor={field.name} className="block mb-1 text-sm font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type="tel"
                  value={field.state.value}
                  onBlur={(e) => handlePhoneBlur(e, field)}
                  onChange={(e) => handlePhoneChange(e, field)}
                  placeholder="(000) 000-0000"
                  className={`w-full p-2 border ${field.state.meta.errors.length ? "border-red-500" : "border-gray-300"} rounded-md`}
                />
                <FieldError field={field} />
                {!field.state.meta.errors.length && (
                  <p className="text-xs text-gray-500 mt-1">Please enter a valid phone number.</p>
                )}
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Email is required"
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if (!emailRegex.test(value)) return "Please enter a valid email address"
                return undefined
              },
            }}
          >
            {(field) => (
              <div>
                <label htmlFor={field.name} className="block mb-1 text-sm font-medium">
                  E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type="text"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="example@example.com"
                  className={`w-full p-2 border ${field.state.meta.errors.length ? "border-red-500" : "border-gray-300"} rounded-md`}
                />
                <FieldError field={field} />
              </div>
            )}
          </form.Field>
        </div>

        <div>
          <form.Field
            name="message"
            validators={{
              onChange: ({ value }) => {
                if (!value) return "Message is required"
                return undefined
              },
            }}
          >
            {(field) => (
              <div>
                <label htmlFor={field.name} className="block mb-1 text-sm font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  rows={5}
                  className={`w-full p-2 border ${field.state.meta.errors.length ? "border-red-500" : "border-gray-300"} rounded-md`}
                />
                <FieldError field={field} />
              </div>
            )}
          </form.Field>
        </div>

        <div className="flex justify-center">
          <Turnstile
            ref={turnstileRef}
            siteKey="0x4AAAAAACBFvIBdUMzQzeaA"
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => setTurnstileToken("")}
            onExpire={() => setTurnstileToken("")}
          />
        </div>

        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <div>
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting || !turnstileToken}
                className="w-full p-3 bg-black hover:bg-gray-800 text-white font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    SUBMITTING...
                  </span>
                ) : (
                  "SUBMIT"
                )}
              </button>
            </div>
          )}
        </form.Subscribe>
      </form>
    </div>
  )

  return (
    <>
      <section className="mx-2 mb-10">
        <div
          className="bg-[#F8F8F8] px-4 md:px-12 2xl:px-0 pt-5 w-full max-w-[560px] rounded-2xl sm:mx-auto"
          id="ContactUs"
        >
          <div className="w-full max-w-full sm:max-w-[450px] m-auto pb-8">
            {/* Custom form implementation */}
            <div className="h-auto">{renderForm()}</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactForm

