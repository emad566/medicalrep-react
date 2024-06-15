import { useEffect, useState } from "react";
import Routes from "../../../constant/Routes";
import { apiGet } from "../../../api/http";
import { toast } from "react-toastify";


const ZidRequestRates = () => {
  const [rate, setRate] = useState<any>({});

  useEffect(() => {
    setInterval(() => { handleRate() }, 3000)
    return () => {

    }
  }, [])

  async function handleRate() {
    const responseJson = await apiGet(Routes.ZidRequestRate);
    if (responseJson.status) {
      setRate(responseJson.data.rate);
    } else {
      toast.error(responseJson.message);
    }
  }

  return (
    <li >
      {rate?.set_value}  {rate?.updated_at} <br /> <span style={{ direction: 'ltr', fontSize: 10, color: '#333' }}>{rate?.description}</span>
    </li>
  )
};
export default ZidRequestRates;