import axios from "axios";
import React, { FunctionComponent } from "react";
const Message: FunctionComponent = () => {
  const [valid, setValid] = React.useState(false);
  const [formError, setFormError] = React.useState("");
  const [formData, setFormData] = React.useState({
    email: "",
    message: "",
    name: "",
  });
  function validMessage(String: string) {
    return String.length >= 3;
  }
  function validEmail(String: string) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(String);
  }
  function validName(String: string) {
    const regName =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
    const name = String;
    return regName.test(name);
  }
  function handleChange(event: any) {
    const { name, value } = event.target;
    event.persist();
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  function handleSubmit(event: any) {
    event.preventDefault();
    if (
      validName(formData.name) &&
      validMessage(formData.message) &&
      validEmail(formData.email)
    ) {
      axios
        .post(`${process.env.NEXT_PUBLIC_URL}`, {
          message: formData.message,
          email: formData.email,
          name: formData.name,
        })
        .then(function (response) {
          console.table(formData);
          // console.log(response)
          setValid(!valid);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      if (
        formData.name.length == 0 ||
        formData.message.length == 0 ||
        formData.email.length == 0
      ) {
        if (formData.email.length == 0) {
          setFormError("Email can't be empty");
        } else if (formData.message.length == 0) {
          setFormError("Message can't be empty");
        } else {
          setFormError("Name can't be empty");
        }
      } else if (!validEmail(formData.email)) {
        setFormError("Please enter a valid email address");
      } else if (!validName(formData.name)) {
        setFormError("Please enter a valid name");
      } else if (!validMessage(formData.message)) {
        setFormError("Message should have at least 3 letters.");
      }
    }
  }
  return (
    <>
      {!valid && (
        <div className="lg:w-1/4 md:w-2/4 fold md:h-auto items-center w-auto mx-4 py-4 md:my-20 lg:my-0 bg-white bg-opacity-0 hover:bg-opacity-10 backdrop-blur-lg drop-shadow-lg rounded-xl shadow-xl duration-200">
          <div className="flex justify-center mx-4 md:mb-4 ">
            <div className="text-xl font-semibold w-5/6 text-center  md:pt-4 text-white pb-2">
              Send your message directly. 🚀
            </div>
          </div>
          <form
            name="myForm"
            onSubmit={handleSubmit}
            id="myForm"
            className=" flex flex-col  items-center"
          >
            <input
              type="email"
              className="p-2 lg:w-5/6 w-[85%] md:w-[71%] bg-black outline-none font-semibold text-left mt-4 rounded-lg bg-opacity-20 hover:bg-opacity-10 backdrop-blur-lg drop-shadow-lg"
              placeholder="Email ID"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            <input
              type="text"
              className="p-2 lg:w-5/6 md:w-[71%] w-[85%] outline-none duration-150 font-semibold text-left mt-4 bg-black bg-opacity-20 hover:bg-opacity-10 backdrop-blur-lg drop-shadow-lg rounded-lg"
              placeholder="Name"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
            <textarea
              className="p-2 lg:w-5/6 w-[85%] md:w-[71%] outline-none font-semibold text-left mt-4 bg-black rounded-lg bg-opacity-20 backdrop-blur-lg drop-shadow-lg"
              placeholder="Message"
              onChange={handleChange}
              name="message"
              value={formData.message}
            />

            {formError && (
              <div className="mt-6 -mb-4 w-72 text-center  text-white font-bold px-4 py-1">
                ❌ : {formError}
              </div>
            )}
            <input
              className="mt-10 bg-red-700 px-2 py-2 mb-6 hover:bg-white hover:text-red-800 duration-200 text-center cursor-pointer text-white font-bold rounded-xl w-fit"
              type="submit"
              value="SEND MESSAGE"
            ></input>
          </form>
        </div>
      )}
      {valid && (
        <div className="lg:w-1/4 mx-8 md:w-2/4 h-auto items-center w-auto py-24 rounded-lg shadow-xl bg-white bg-opacity-0 hover:bg-opacity-10 backdrop-blur-lg drop-shadow-lg my-28 md:my-32 lg:my-0">
          <div className="text-white text-2xl font-semibold text-center mx-4">
            Thankyou for following up! ✅
          </div>
          <div className="text-center md:text-lg mt-8 text-sm text-white">
            <div className=" text-lg">Name : {formData.name}</div>
            <div className=" text-lg">Email ID : {formData.email}</div>
            <div className=" text-lg">
              Message : &quot;{formData.message}&quot;
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
