import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SchoolInfo() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl text-[#1a7fa8]">About SonShine Kids International</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          Established in 2016, SonShine Kids International began with a modest enrollment but quickly grew through word-of-mouth recommendations from satisfied parents. Our commitment to quality education and childcare has made us one of the most trusted educational institutions in our area.
        </p>
        <h3 className="text-xl font-semibold text-[#1a7fa8]">Our Educational Programs</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><span className="font-medium">Play Group:</span> For children from 2 years old</li>
          <li><span className="font-medium">Nursery:</span> Early childhood development</li>
          <li><span className="font-medium">Kindergarten:</span> Comprehensive bilingual education</li>
          <li><span className="font-medium">Preparatory:</span> Advanced preparation for primary school</li>
        </ul>
        <p>
          Through the years, we have consistently received positive feedback from parents about our teaching quality and nurturing environment. Our success is reflected in the achievements of our students and the continued trust placed in us by our community.
        </p>
      </CardContent>
    </Card>
  )
}

