import dynamic from "next/dynamic";
import InvoiceComponent from "@/components/invoice/Invoice";

export const metadata = {
  title: "Invoice || BoxTrip - Travel & Tour React NextJS Template",
  description: "BoxTrip - Travel & Tour React NextJS Template",
};

const Invoice = () => {
  return (
    <>
      <InvoiceComponent />
    </>
  );
};

export default dynamic(() => Promise.resolve(Invoice), { ssr: false });
