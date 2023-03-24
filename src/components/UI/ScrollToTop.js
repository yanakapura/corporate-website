import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, state } = useLocation();
  const { id } = useParams();

  const containsServices = state?.prevRoute.pathname.includes("services");
  const isInvalid =
    containsServices &&
    (pathname.includes("services/" + id) || pathname === "/services");

  useEffect(() => {
    !isInvalid && window.scrollTo(0, 0);
  }, [pathname, id]);

  return null;
}
