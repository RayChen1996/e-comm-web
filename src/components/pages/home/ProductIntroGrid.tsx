import Image from "next/image";
import IndexImg1 from "@/../../public/index1.jpg";
import IndexImg2 from "@/../../public/index2.jpg";
import IndexImg3 from "@/../../public/index3.png";
import IndexImg4 from "@/../../public/index4.jpg";
import IndexImg5 from "@/../../public/index5.jpg";

/** - 首頁區塊2 */
export default function ProductIntroGrid() {
  return (
    <section className="container mx-auto max-w-4xl p-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Gabrielle CHANEL */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Gabrielle CHANEL</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              全新香氛，展現女性的自由與獨立。融合茉莉花、依蘭依蘭、橙花和格拉斯茉莉的花香調，
              呈現出充滿活力與優雅的香氛體驗。這款香水象徵著現代女性的力量與魅力，
              是每一位追求自我表達的女性的完美選擇。
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex aspect-square justify-center">
          <Image
            src={IndexImg1}
            alt="Gabrielle CHANEL Perfume"
            fill
            className="object-cover"
          />
        </div>

        {/* Product Image */}
        <div className="relative flex aspect-square justify-center">
          <Image
            src={IndexImg2}
            alt="Luxury Fragrance"
            fill
            className="object-contain"
          />
        </div>

        {/* Five O'clock Au Gingembre */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">
              Five O{"'"}clock Au Gingembre
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              午後時光的完美詮釋，融合生薑的溫暖香調與柑橘的清新氣息。
              這款獨特的香氛帶來舒緩與活力的雙重體驗，適合在任何時刻使用。
              精緻的瓶身設計展現了品牌對細節的追求，是香氛愛好者的理想選擇。
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CHANEL N°5 */}
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">CHANEL N°5</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              經典中的經典，永恆的香氛傳奇。自1921年創立以來，
              N°5一直是優雅與奢華的象徵。融合醛類、茉莉、玫瑰和檀香的複雜香調，
              創造出無與倫比的嗅覺體驗。這不僅僅是一款香水，更是一種生活態度的體現。
            </p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex aspect-square justify-center">
          <Image
            src={IndexImg3}
            alt="CHANEL N°5 Perfume"
            fill
            className="object-contain"
          />
        </div>

        {/* Skincare Product */}
        <div className="relative flex aspect-square justify-center">
          <Image
            src={IndexImg4}
            alt="Luxury Skincare Product"
            fill
            className="object-contain"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">1.</h4>
              <h3 className="text-lg font-semibold">
                Critical Percentage of Planned Maintenance Compliance
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The critical percentage of planned maintenance compliance is a
                key performance indicator that measures the effectiveness of
                maintenance operations. This metric helps ensure optimal
                equipment performance and longevity through systematic care and
                attention.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">2.</h4>
              <h3 className="text-lg font-semibold">
                Percentage of Planned Maintenance
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The planned maintenance percentage indicates the ratio of
                scheduled maintenance activities to total maintenance work. This
                strategic approach ensures consistent product quality and
                reduces unexpected downtime through proactive care protocols.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">3.</h4>
              <h3 className="text-lg font-semibold">
                Critical Percentage of Planned Maintenance
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Maintaining the critical percentage of planned maintenance
                ensures that all luxury products meet the highest standards of
                quality and performance. This systematic approach guarantees
                exceptional results and customer satisfaction.
              </p>
            </div>

            <button className="btn btn-outline btn-primary mt-4 w-full">
              Plan a free online training
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
