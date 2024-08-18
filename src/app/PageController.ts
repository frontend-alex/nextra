import React, { useState, useEffect } from "react";

const PageController = () => {
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

  return { data, handleChange };
};

export default PageController;
