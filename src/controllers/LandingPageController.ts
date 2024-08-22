import React, { useState } from "react";

const LandingPageController = () => {
  const [ contactId, setContactId ] = useState<any>()
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    phone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [ name ] :  value
    }))
  }

  return { data, handleChange, contactId, setContactId };
};

export default LandingPageController;
