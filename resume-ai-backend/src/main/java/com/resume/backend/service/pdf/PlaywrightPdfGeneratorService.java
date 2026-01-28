package com.resume.backend.service.pdf;

import com.microsoft.playwright.*;
import org.springframework.stereotype.Service;

@Service
public class PlaywrightPdfGeneratorService implements PdfGeneratorService {

    @Override
    public byte[] generatePDF(String htmlContent) {
        try (Playwright playwright = Playwright.create()) {

            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
                    .setHeadless(true));

            BrowserContext context = browser.newContext();

            Page page = context.newPage();

            // Inject your HTML directly into the page
            page.setContent(htmlContent);

            // Generate PDF bytes
            byte[] pdfBytes = page.pdf(new Page.PdfOptions()
                    .setFormat("A4")
                    .setPrintBackground(true));

            browser.close();
            return pdfBytes;

        } catch (Exception e) {
            throw new RuntimeException("Failed to generate PDF using Playwright", e);
        }
    }
}
    