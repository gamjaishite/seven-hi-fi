
"use client";
import SecondaryNavbar from "@/components/SecondNavBar";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import Link from "next/link";
import { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";


const { default: PageTemplate } = require("@/components/PageTemplate")

const DEFAULT_SUBJECTS = [
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},{code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},{code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},{code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},{code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},{code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: 'Nama Program Studi', category: 'Wajib', schedule_href: '/'},
]

const TableContent = ({children, isHeader = false}) => {
    return isHeader ? (
        <th className="p-2">{children}</th>
    ) : (
        <td className="px-2 py-[20px]">{children}</td>
    )
}

const SubjectRow = ({subject, idx}) => {
    return (
        <tr className={`${idx % 2 === 1 ? 'bg-seven-bg-table' : ''} text-seven-font-size-table-content border-b-[1px] border-seven-border-grey align-top`}>
            <TableContent>
                <Link className="underline text-seven-hyperlink font-medium" href={'/'}>{subject.code}</Link>
            </TableContent>
            <TableContent>
                <Link className="underline text-seven-hyperlink" href={'/'}>{subject.name}</Link>
            </TableContent>
            <TableContent>{subject.faculty}</TableContent>
            <TableContent>{subject.study}</TableContent>
            <TableContent>{subject.category}</TableContent>
            <TableContent>
                <Link className="underline text-seven-hyperlink" href={subject.schedule_href}>Link</Link>
            </TableContent>
        </tr>
    )
}

const SubjectsTable = ({subjects = []}) => {
    return (
        <div className="grid border border-seven-border-grey rounded-sm w-fit md:w-full">
            <table className="text-left text-seven-foreground-light w-[710px] md:w-full">
                <colgroup>
                    <col span="1" className="w-[10%]"/>
                    <col span="1" className="w-[30%]"/>
                    <col span="1" className="w-[10%]"/>
                    <col span="1" className="w-[30%]"/>
                    <col span="1" className="w-[10%]"/>
                    <col span="1" className="w-[10%]"/>
                </colgroup>
                <thead>
                    <tr className="bg-seven-bg-blue-light text-seven-font-size-default align-top">
                        <TableContent isHeader>Kode</TableContent>
                        <TableContent isHeader>Nama</TableContent>
                        <TableContent isHeader>Fakultas</TableContent>
                        <TableContent isHeader>Prodi</TableContent>
                        <TableContent isHeader>Kategori</TableContent>
                        <TableContent isHeader>Jadwal</TableContent>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((elmt, idx) => (
                        <SubjectRow key={idx} idx={idx} subject={elmt}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const SubjectFilter = ({label, onChange}) => {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className="text-[12px] space-x-2 border border-seven-border-filter min-w-max py-[5px] px-[10px] h-fit text-seven-filter">
                <SelectValue className="" placeholder={label} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>2023/2024</SelectLabel>
                <SelectItem value="1-2023/2024">Semester 1 - 2023/2024</SelectItem>
                </SelectGroup>
                <SelectGroup>
                <SelectLabel>2022/2023</SelectLabel>
                <SelectItem value="3-2022/2023">Semester 3 - 2022/2023</SelectItem>
                <SelectItem value="2-2022/2023">Semester 2 - 2022/2023</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
const DaftarMataKuliah = () => {

    const [subjects, setSubjects] = useState(DEFAULT_SUBJECTS);
    const [showFilter, setShowFilter] = useState(false);

    return ( 
        <PageTemplate pageTitle='Daftar Mata Kuliah' breadCrumbs={[{href: '/daftar-mata-kuliah', label: 'Daftar Mata Kuliah'}]}>
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
                <div className="flex flex-row w-full">
                    <input maxLength={255} className="border border-seven-border-button-primary rounded-l-sm outline-none text-seven-filter text-seven-font-size-filter px-[12px] w-full"></input>
                    <Button className="h-fit px-[12px] py-[8px] bg-seven-bg-button-primary border border-l-0 border-seven-border-button-primary rounded-none rounded-r-sm hover:bg-seven-bg-button-primary-hover">
                        <FaSearch size={12}/>
                    </Button>
                </div>
                <div className="flex flex-row gap-4 items-center w-full sm:w-auto">
                    {showFilter &&
                        <div className="flex flex-row gap-4 items-center w-full">
                            <SubjectFilter label='Fakultas'/>
                            <SubjectFilter label='Prodi'/>
                            <SubjectFilter label='Wajib'/>
                        </div>
                    }
                    <Button className="h-fit px-[12px] py-[8px] bg-seven-bg-button-primary border border-seven-border-button-primary hover:bg-seven-bg-button-primary-hover" onClick={() => {setShowFilter(oldValue => !oldValue)}}>
                        <FaFilter size={12}/>
                    </Button>
                </div>
            </div>
            <SubjectsTable subjects={subjects}/>
        </PageTemplate>
    );
}
 
export default DaftarMataKuliah;