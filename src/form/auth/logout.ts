import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { DefaultValues } from "react-hook-form";

/** - cart`schema` */
export const schema = z.object({});

/** - cart`schema`型別 */
export type SchemaType = z.infer<typeof schema>;

/** - cart */
export const defaultValues: DefaultValues<SchemaType> = {};

/** - cart解析器 */
export const resolver = zodResolver(schema);
