import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const classVariants = (...configArgs) => {
    return (...variantArgs) => {
        const variants = cva(...configArgs)

        return twMerge(variants(...variantArgs))
    }
}

export default classVariants