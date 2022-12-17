import React, { useState, useEffect } from "react";

const useFatch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // API Loading দরি হলে একটি Massage-এর ব্যবস্থা করা
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {      // res = response
        if (!res.ok) {
          throw Error("fetching is not sussessful");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false); // after complete loading it will false
        setError(null);
      })
      .catch((error) => {
        setError(error.massage);
      });
  }, [url]);

  return {data, isLoading, error} ;
};

export default useFatch;
