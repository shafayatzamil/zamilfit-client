import { useEffect, useState } from "react";

const useServices = () => {
  const [allservice, setAllService] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://zamilfits-server-shafayatzamil.vercel.app/service")
      .then((res) => res.json())
      .then((data) => {
        setAllService(data.data);
        setLoading(false);
      });
  }, []);

  return [allservice, setAllService, loading];
};
export default useServices;
