"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, ExternalLink, FileText, ChevronLeft, ChevronRight } from "lucide-react"

interface PDFViewerProps {
  url: string
  title: string
  onClose: () => void
}

export default function PDFViewer({ url, title, onClose }: PDFViewerProps) {
  const [loading, setLoading] = useState(true)

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl h-[90vh] flex flex-col rounded-2xl border border-[#27272A] bg-[#111111] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#27272A] flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#27272A] bg-black">
                <FileText size={14} className="text-[#A1A1AA]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-[#A1A1AA]">Original presentation deck</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
  <a
    href={url}
    download
    className="inline-flex items-center gap-1.5 rounded-lg border border-[#27272A] px-3 py-1.5 text-xs font-medium text-[#A1A1AA] transition-colors hover:text-white hover:border-[#3F3F46]"
  >
    <Download size={12} />
    Download
  </a>

  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 rounded-lg border border-[#27272A] px-3 py-1.5 text-xs font-medium text-[#A1A1AA] transition-colors hover:text-white hover:border-[#3F3F46]"
  >
    <ExternalLink size={12} />
    Open in new tab
  </a>

  <button
    onClick={onClose}
    className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#27272A] text-[#A1A1AA] transition-colors hover:text-white hover:border-[#3F3F46]"
  >
    <X size={14} />
  </button>
</div>    
          {/* PDF Embed */}
          <div className="relative flex-1 bg-[#0a0a0a]">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#27272A] border-t-blue-500" />
                <p className="text-sm text-[#A1A1AA]">Loading deck...</p>
              </div>
            )}
            <iframe
              src={`${url}#toolbar=1&navpanes=1&scrollbar=1&view=FitH`}
              className="h-full w-full"
              onLoad={() => setLoading(false)}
              title={title}
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-3 border-t border-[#27272A] flex-shrink-0">
            <p className="text-xs text-[#3F3F46]">
              Click outside or press ESC to close
            </p>
            <div className="flex items-center gap-2">
              <a
                href={url}
                download
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-white/90"
              >  
                <Download size={12} />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}