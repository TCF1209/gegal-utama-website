"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";
import { STATES, LOAN_AMOUNTS, getWhatsAppUrl } from "@/lib/constants";

const EMPLOYMENT_KEYS = [
  "government",
  "private",
  "pensioner",
  "socso",
  "zakat",
  "jkm",
] as const;

export default function ApplicationForm() {
  const { language, t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const schema = z.object({
    name: z
      .string()
      .min(1, t("form.errors.nameRequired"))
      .min(3, t("form.errors.nameMin")),
    phone: z
      .string()
      .min(1, t("form.errors.phoneRequired"))
      .regex(/^0\d{1,2}-?\d{3,4}\s?\d{4}$/, t("form.errors.phoneInvalid")),
    employment: z.string().min(1, t("form.errors.employmentRequired")),
    state: z.string().min(1, t("form.errors.stateRequired")),
    loanAmount: z.string().min(1, t("form.errors.loanAmountRequired")),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      employment: "",
      state: "",
      loanAmount: "",
    },
  });

  const formatAmount = (amount: number) =>
    `RM ${amount.toLocaleString("en-MY")}`;

  const buildWhatsAppMessage = (data: FormData) => {
    const employmentLabel = t(
      `form.employmentOptions.${data.employment}`
    );
    const amount = formatAmount(Number(data.loanAmount));

    if (language === "bm") {
      return `Saya ingin memohon pinjaman peribadi dengan Gegal Utama.\n\nNama: ${data.name}\nTelefon: ${data.phone}\nPekerjaan: ${employmentLabel}\nNegeri: ${data.state}\nJumlah: ${amount}\n\nSila hubungi saya untuk maklumat lanjut. Terima kasih!`;
    }

    return `I would like to apply for a personal loan with Gegal Utama.\n\nName: ${data.name}\nPhone: ${data.phone}\nEmployment: ${employmentLabel}\nState: ${data.state}\nAmount: ${amount}\n\nPlease contact me for further information. Thank you!`;
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            name: data.name,
            phone: data.phone,
            employment: t(`form.employmentOptions.${data.employment}`),
            state: data.state,
            loanAmount: formatAmount(Number(data.loanAmount)),
          },
          publicKey
        );
      } else {
        console.log("EmailJS not configured. Form data:", data);
      }

      setShowSuccess(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(
        language === "bm"
          ? "Ralat berlaku. Sila cuba lagi."
          : "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClass =
    "w-full rounded-lg border px-4 py-3 text-gray-800 outline-none transition-colors duration-200 focus:ring-2 focus:ring-[#1E88E5] focus:border-[#1E88E5]";
  const inputErrorClass = "border-red-500";
  const inputNormalClass = "border-gray-300";

  return (
    <section id="apply" className="bg-[#F0F7FF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          {t("form.heading")}
        </h2>
        <p className="mt-3 text-lg text-gray-600">{t("form.subheading")}</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-lg"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg space-y-5"
          noValidate
        >
          {/* Name */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              {t("form.name")}
            </label>
            <input
              type="text"
              placeholder={t("form.namePlaceholder")}
              {...register("name")}
              className={`${inputBaseClass} ${
                errors.name ? inputErrorClass : inputNormalClass
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              {t("form.phone")}
            </label>
            <input
              type="text"
              placeholder={t("form.phonePlaceholder")}
              {...register("phone")}
              className={`${inputBaseClass} ${
                errors.phone ? inputErrorClass : inputNormalClass
              }`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Employment */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              {t("form.employment")}
            </label>
            <select
              {...register("employment")}
              className={`${inputBaseClass} ${
                errors.employment ? inputErrorClass : inputNormalClass
              }`}
              defaultValue=""
            >
              <option value="" disabled>
                {t("form.employmentPlaceholder")}
              </option>
              {EMPLOYMENT_KEYS.map((key) => (
                <option key={key} value={key}>
                  {t(`form.employmentOptions.${key}`)}
                </option>
              ))}
            </select>
            {errors.employment && (
              <p className="mt-1 text-sm text-red-600">
                {errors.employment.message}
              </p>
            )}
          </div>

          {/* State */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              {t("form.state")}
            </label>
            <select
              {...register("state")}
              className={`${inputBaseClass} ${
                errors.state ? inputErrorClass : inputNormalClass
              }`}
              defaultValue=""
            >
              <option value="" disabled>
                {t("form.statePlaceholder")}
              </option>
              {STATES.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="mt-1 text-sm text-red-600">
                {errors.state.message}
              </p>
            )}
          </div>

          {/* Loan Amount */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              {t("form.loanAmount")}
            </label>
            <select
              {...register("loanAmount")}
              className={`${inputBaseClass} ${
                errors.loanAmount ? inputErrorClass : inputNormalClass
              }`}
              defaultValue=""
            >
              <option value="" disabled>
                {t("form.loanAmountPlaceholder")}
              </option>
              {LOAN_AMOUNTS.map((amount) => (
                <option key={amount} value={String(amount)}>
                  {formatAmount(amount)}
                </option>
              ))}
            </select>
            {errors.loanAmount && (
              <p className="mt-1 text-sm text-red-600">
                {errors.loanAmount.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF6F00] px-6 py-3.5 text-lg font-semibold text-white shadow-md transition-opacity hover:opacity-90 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? t("form.submitting") : t("form.submit")}
          </button>
        </form>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Green Checkmark */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {t("success.title")}
              </h3>
              <p className="mt-2 text-gray-600">{t("success.message")}</p>

              <div className="mt-6 space-y-3">
                <a
                  href={getWhatsAppUrl(buildWhatsAppMessage(getValues()))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-green-600 px-6 py-3 text-center font-semibold text-white shadow hover:bg-green-700 transition-colors"
                >
                  {t("success.whatsapp")}
                </a>
                <button
                  type="button"
                  onClick={() => setShowSuccess(false)}
                  className="block w-full rounded-full bg-gray-200 px-6 py-3 text-center font-semibold text-gray-700 hover:bg-gray-300 transition-colors"
                >
                  {t("success.close")}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
