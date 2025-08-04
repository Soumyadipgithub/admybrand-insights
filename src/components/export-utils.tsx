"use client"

import { jsPDF } from "jspdf"
import "jspdf-autotable"

export const exportToCSV = (data: any[], filename: string) => {
  if (!data || data.length === 0) return

  const headers = Object.keys(data[0])
  const csvContent = [
    headers.join(','),
    ...data.map(row => 
      headers.map(header => {
        const value = row[header]
        return typeof value === 'string' && value.includes(',') 
          ? `"${value}"` 
          : value
      }).join(',')
    )
  ].join('\n')

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const link = document.createElement('a')
  const url = URL.createObjectURL(blob)
  link.setAttribute('href', url)
  link.setAttribute('download', `${filename}.csv`)
  link.style.visibility = 'hidden'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export const exportToPDF = (data: any[], filename: string, title: string) => {
  if (!data || data.length === 0) return

  const doc = new jsPDF()
  
  // Add title
  doc.setFontSize(16)
  doc.text(title, 14, 20)
  
  // Add table
  const headers = Object.keys(data[0])
  const tableData = data.map(row => headers.map(header => row[header]))
  
  ;(doc as any).autoTable({
    head: [headers],
    body: tableData,
    startY: 30,
    styles: {
      fontSize: 8,
      cellPadding: 2,
    },
    headStyles: {
      fillColor: [66, 139, 202],
      textColor: 255,
    },
  })
  
  doc.save(`${filename}.pdf`)
}

export const exportChartAsImage = (chartRef: any, filename: string) => {
  if (!chartRef) return
  
  try {
    const canvas = chartRef.querySelector('canvas')
    if (canvas) {
      const link = document.createElement('a')
      link.download = `${filename}.png`
      link.href = canvas.toDataURL()
      link.click()
    }
  } catch (error) {
    console.error('Error exporting chart:', error)
  }
} 