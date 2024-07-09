"use client";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import loginSchema from "@/app/schemas/loginin-schema";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

type FormValues = {
  email: string;
  password: string;
};

const ZodValidationForm = () => {
  const route = useRouter();
  const form = useForm<FormValues>({
    // validation mode
    mode: "onTouched",
    // static default values
    defaultValues: {
      email: "",
      password: "",
    },
    // validation schema for form fields using zod library
    resolver: zodResolver(loginSchema),
  });

  const { register, control, handleSubmit, formState } = form;
  //  here we will get errors from formState and get some info from formState, like errors, touchedFields and dirtyFields, we can use this info to show errors on screen
  const { errors, isDirty, isValid } = formState;

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    console.log("Form submitted:", data);
    try {
      const response = await axios.post(
        "https://65784a9df08799dc8044d036.mockapi.io/CRUD",
        data
      );
      console.log("Login successful:", response.data);
      // here we can handle the successful login response here (e.g., save the token, redirect to another page)
      toast({
        title: "Success",
        description: "Logged in successfully",
      });
      route.push("/dashboard");
    } catch (error) {
      // console.error("Login failed:", error.response?.data || error.message);
      toast({
        title: "Error",
        description: "Failed to log in",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          noValidate
          //   to submit the form we use handleSubmit method assigned to the onSubmit event and passed in our submit function
          // reason to use handleSubmit is it can accept another argument onError
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-white w-full  md:w-1/2  lg:w-1/4 shadow-md p-4 rounded "
        >
          <div className="text-xl flex justify-center font-extrabold tracking-tight lg:text-4xl mb-6  text-center">
            LogIn To LMS
          </div>
          {/* email */}
          <div className="flex justify-start  text-start flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="mrbeast@feastables.com"
              className="border border-black rounded p-2"
              {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
                // we can do custom validation using the validate function
                validate: {
                  required: (fieldValue) => {
                    return fieldValue.trim() !== "" || "Email Address Required";
                  },
                  notAdmin: (fieldValue) => {
                    return (
                      fieldValue !== "admin@gmail.com" ||
                      "Enter a different email address"
                    );
                  },
                  notBlackListed: (fieldValue) => {
                    return (
                      !fieldValue.endsWith("baddomain.com") ||
                      "This domain is not supported"
                    );
                  },
                },
              })}
            />
            {/* In any error case of current field error message will shown because we get errors from formState */}
            <p className=" text-sm text-red-500">{errors.email?.message}</p>
          </div>

          {/* channel name */}
          <div className="flex justify-start  text-start flex-col">
            <label htmlFor="">Password</label>
            <input
              type="password"
              id="channel"
              placeholder="***********"
              className="border border-black rounded p-2"
              {...register("password", { required: "Password Required" })}
            />
            <p className=" text-sm text-red-500">{errors.password?.message}</p>
          </div>

          {/* Here we make it disabled on the basis of isDirty and isValid values, and we get these values form formState */}
          {/* Submission Button  */}
          <button
            type="submit"
            // remove !isValid condition and make it disabled for now only
            disabled={!isDirty || !isDirty}
            className={`border ${
              isValid ? "bg-black" : "bg-gray-300"
            } font-bold text-white w-full my-2 p-2 rounded`}
          >
            {!isValid ? "Please Fill Form" : "Submit"}
          </button>
        </form>
        <DevTool control={control} />
      </div>
    </>
  );
};

export default ZodValidationForm;