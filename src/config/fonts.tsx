import { Poppins, Merriweather, Nunito } from "next/font/google";

export const fontPoppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"]
});

export const fontMerriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"]
});

export const fontNunito = Nunito({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"]
});