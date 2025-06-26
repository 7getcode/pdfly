import { createRootRoute, createRoute } from "@tanstack/react-router";
import Root from "./components/Root";
import NotFound from "./pages/NotFound";
import { lazy } from "react";

const rootRoute = createRootRoute({
  component: () => <Root />,
  notFoundComponent: () => <NotFound />,
});

function delayImport<T>(importFn: () => Promise<T>, delay = 1000): Promise<T> {
  console.log("Delaying import by", delay);
  return new Promise((resolve) => {
    setTimeout(() => {
      importFn().then(resolve);
    }, delay);
  });
}

// Helper to generate routes using lazy-loaded components
const lazyRoute = (path: string, file: string) =>
  createRoute({
    getParentRoute: () => rootRoute,
    path,
    component: lazy(
      () =>
        delayImport(() => import(`./pages/${file}`)) as Promise<{
          default: React.ComponentType;
        }>
    ),
  });

// Index
const indexRoute = lazyRoute("/", "Index");
// Organize

const mergePdfRoute = lazyRoute("merge-pdf", "MergePdf");
const splitPdfRoute = lazyRoute("split-pdf", "SplitPdf");
const removePagesRoute = lazyRoute("remove-pages", "RemovePages");
const organizePdfRoute = lazyRoute("organize-pdf", "OrganizePdf");

// Optimize
const compressPdfRoute = lazyRoute("compress-pdf", "CompressPdf");
const ocrPdfRoute = lazyRoute("ocr-pdf", "OcrPdf");

// Convert
const jptToPdfRoute = lazyRoute("jpg-to-pdf", "JpgToPdf");
const wordToPdfRoute = lazyRoute("word-to-pdf", "WordToPdf");
const pptToPdfRoute = lazyRoute("ppt-to-pdf", "PptToPdf");
const excelToPdfRoute = lazyRoute("excel-to-pdf", "ExcelToPdf");
const HtmlToPdfRoute = lazyRoute("html-to-pdf", "HtmlToPdf");
const pdfToJpgRoute = lazyRoute("pdf-to-jpg", "PdfToJpg");
const pdfToWordRoute = lazyRoute("pdf-to-word", "PdfToWord");
const pdfToPptRoute = lazyRoute("pdf-to-ppt", "PdfToPpt");
const pdfToExcelRoute = lazyRoute("pdf-to-excel", "PdfToExcel");

// Edit

const addWatermarkRoute = lazyRoute("add-watermark-pdf", "AddWatermark");
const rotatePdfRoute = lazyRoute("rotate-pdf", "RotatePdf");
const addPgnoRoute = lazyRoute("add-pgnos-pdf", "AddPageNumbers");

// Security

const lockPdfRoute = lazyRoute("lock-pdf", "LockPdf");
const unlockPdfRoute = lazyRoute("unlock-pdf", "UnlockPdf");
const sighPdfRoute = lazyRoute("sign-pdf", "SignPdf");

export const routeTree = rootRoute.addChildren([
  indexRoute,
  mergePdfRoute,
  splitPdfRoute,
  removePagesRoute,
  organizePdfRoute,
  compressPdfRoute,
  ocrPdfRoute,
  jptToPdfRoute,
  wordToPdfRoute,
  pptToPdfRoute,
  excelToPdfRoute,
  HtmlToPdfRoute,
  pdfToJpgRoute,
  pdfToWordRoute,
  pdfToPptRoute,
  pdfToExcelRoute,
  addWatermarkRoute,
  rotatePdfRoute,
  addPgnoRoute,
  lockPdfRoute,
  unlockPdfRoute,
  sighPdfRoute,
]);
