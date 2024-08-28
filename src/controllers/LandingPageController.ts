import React, { useState } from "react";

const LandingPageController = () => {
  const [ contactId, setContactId ] = useState<any>()
  const [ show, setShow ] = useState<boolean>(false)
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    phone: ""
  });

  const onMouseEnter = () => setShow(true)
  const onMouseLeave = () => setShow(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [ name ] :  value
    }))
  }

  return { data, handleChange, contactId, setContactId, onMouseLeave, onMouseEnter, show  };
};

export default LandingPageController;
