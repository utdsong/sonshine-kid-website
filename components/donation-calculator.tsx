"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const MONTHLY_FEE = 110 // USD per month per student
const durations = [
  { value: "6", label: "6 Months", multiplier: 6 },
  { value: "12", label: "1 Year", multiplier: 12 },
  { value: "24", label: "2 Years", multiplier: 24 }
]

export function DonationCalculator() {
  const [duration, setDuration] = useState("12")
  const [students, setStudents] = useState("1")
  const [showQR, setShowQR] = useState(false)

  const calculateTotal = () => {
    const months = parseInt(duration)
    const numStudents = parseInt(students)
    return MONTHLY_FEE * months * numStudents
  }

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <Label>Sponsorship Duration</Label>
            <RadioGroup
              defaultValue={duration}
              onValueChange={setDuration}
              className="grid grid-cols-3 gap-4"
            >
              {durations.map((option) => (
                <Label
                  key={option.value}
                  className={`flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary ${
                    duration === option.value ? "border-[#1a7fa8]" : ""
                  }`}
                >
                  <RadioGroupItem value={option.value} className="sr-only" />
                  <span className="text-lg font-semibold">{option.label}</span>
                  <span className="text-sm text-muted-foreground">
                    ${MONTHLY_FEE * option.multiplier} total
                  </span>
                </Label>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label>Number of Students</Label>
            <Select value={students} onValueChange={setStudents}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select number of students" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} Student{num > 1 ? "s" : ""}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monthly Fee per Student:</span>
                <span>${MONTHLY_FEE}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span>{duration} months</span>
              </div>
              <div className="flex justify-between">
                <span>Number of Students:</span>
                <span>{students}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total Amount:</span>
                <span>${calculateTotal()}</span>
              </div>
            </div>
          </div>

          <Button 
            className="w-full bg-[#1a7fa8] hover:bg-[#1a7fa8]/90"
            onClick={() => setShowQR(true)}
          >
            Proceed to Payment
          </Button>

          {showQR && (
            <div className="text-center space-y-4">
              <div className="bg-white p-8 rounded-lg inline-block mx-auto">
                <Image
                  src="/images/bakong-qr.jpg"
                  alt="Bakong QR Payment"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
              <p className="text-sm text-gray-600">
                Scan this QR code with your Bakong app to complete the donation
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

