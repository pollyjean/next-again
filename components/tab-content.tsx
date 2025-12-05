import CreditsTab from "./tabs/credits-tab";
// import ProvidersTab from "./tabs/providers-tab";
import SimilarTab from "./tabs/similar-tab";
import VideoTab from "./tabs/video-tab";

export default async function TabContent({ id, tab }: { id: string; tab: string }) {
    return <section>
        {tab === "video" && <VideoTab id={id} />}
        {tab === "credits" && <CreditsTab id={id} />}
        {tab === "similar" && <SimilarTab id={id} />}
        {/* {tab === "providers" && <ProvidersTab id={id} />} */}
    </section>
}