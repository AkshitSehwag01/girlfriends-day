import { siteData } from "../../data/siteData";
import Scene from "../common/Scene";
import SectionHeader from "../common/SectionHeader";
import GlassPanel from "../common/GlassPanel";

export default function Promise() {
  return (
    <Scene aria-labelledby="promise-title" className="pb-28">
      <SectionHeader
        titleId="promise-title"
        eyebrow="Chapter 6"
        title="A Promise To You"
        subtitle="Words I mean with everything I am."
      />

      <GlassPanel strong className="max-w-3xl mx-auto text-center">
        <span className="text-5xl sm:text-6xl mb-6 block" aria-hidden="true">
          ♡
        </span>

        <p className="text-lg sm:text-xl text-pink-50/90 leading-relaxed sm:leading-9 whitespace-pre-line">
          {siteData.promise}
        </p>

        <p className="mt-12 text-pink-200 text-xl sm:text-2xl">
          Forever Yours,
        </p>

        <p className="text-3xl sm:text-4xl font-semibold text-white mt-2">
          {siteData.couple.yourName}
        </p>
      </GlassPanel>
    </Scene>
  );
}
