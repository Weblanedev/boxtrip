import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(homes)/home_5/page";

export const metadata = {
  title: "Boxtrip || Travel & Tour",
  description: "BOXTRIP - Travel & Tour",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
