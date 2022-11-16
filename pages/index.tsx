import PrimaryLayout from "@/components/layouts/primary_layout/PrimaryLayout";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "./page";

const Home: NextPageWithLayout = () => {
	return <div>home</div>;
};

Home.getLayout = (page: ReactElement) => <PrimaryLayout>{page}</PrimaryLayout> ;

export default Home;
