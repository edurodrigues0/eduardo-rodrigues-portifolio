import { FormEvent, MutableRefObject } from "react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormProps {
  handleSubmit: (e: FormEvent) => Promise<void>;
  isSubmiting: boolean;
  isMessageSuccess: boolean;
  form: MutableRefObject<HTMLFormElement>;
}

export function Form({
  handleSubmit,
  isSubmiting,
  isMessageSuccess,
  form,
}: FormProps) {
  return (
    <form
      className="w-full flex flex-col items-center"
      ref={form}
      onSubmit={handleSubmit}
    >
      <h1 className="mt-12 max-sm:text-sm">
        <span className="text-primary">Contact</span> Form
      </h1>

      <div className="p-8 max-sm:p-4 w-full max-sm:w-80 flex flex-col bg-secondary rounded-lg mt-12">
        <div className="flex max-sm:flex-col items-center justify-between gap-12 max-sm:gap-4">
          <div className="flex flex-col gap-8 max-sm:gap-4">
            <Input
              className="w-[40rem] max-lg:w-96 max-md:w-72"
              type="text"
              placeholder="Full name"
              required
              name="from_name"
              id="from_name"
            />

            <Input
              className="w-[40rem] max-lg:w-96 max-md:w-72"
              type="email"
              placeholder="Email address"
              required
              name="from_email"
              id="from_email"
            />

            <Input
              className="w-[40rem] max-lg:w-96 max-md:w-72"
              type="text"
              placeholder="Subject"
              required
              name="from_subject"
              id="from_subject"
            />
          </div>

          <Textarea
            className="resize-none h-full max-sm:w-72 max-sm:h-56"
            placeholder="Your message here..."
            required
            name="message"
            id="message"
          />
        </div>

        {!isMessageSuccess ? (
          <button
            disabled={isSubmiting}
            type="submit"
            className="btn bg-primary mt-12 max-sm:mt-6 self-center w-52 font-bold hover:bg-orange-700"
          >
            Send
          </button>
        ) : (
          <button
            disabled
            className="btn mt-12 max-sm:mt-6 self-center w-52 font-bold disabled:bg-green-600 disabled:text-green-50"
          >
            Success!
          </button>
        )}
      </div>
    </form>
  );
}
