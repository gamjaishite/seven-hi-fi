import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MonthlyCalendar() {
  return (
    <>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="1">Agu 2023</TabsTrigger>
          <TabsTrigger value="2">Sep 2023</TabsTrigger>
          <TabsTrigger value="3">Okt 2023</TabsTrigger>
          <TabsTrigger value="4">Nov 2023</TabsTrigger>
          <TabsTrigger value="5">Des 2023</TabsTrigger>
          <TabsTrigger value="6">Jan 2024</TabsTrigger>
        </TabsList>
        <TabsContent value="1">Kalender Bulan Agustus 2023</TabsContent>
        <TabsContent value="2">Kalender Bulan September 2023</TabsContent>
      </Tabs>
    </>
  );
}
