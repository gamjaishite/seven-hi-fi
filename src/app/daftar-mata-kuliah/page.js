"use client";

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
import { useRef, useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";

const { default: PageTemplate } = require("@/components/PageTemplate")

const DEFAULT_SUBJECTS = [
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
    {code: 'KKXXXX', name: 'Nama Mata Kuliah', faculty: 'FXXX', study: {code: 'XXX', name: 'Nama Program Studi'}, category: 'Wajib', schedule_href: '/'},
]

const PAGE_SIZE = 10;
const TOTAL_PAGE = Math.ceil(DEFAULT_SUBJECTS.length / PAGE_SIZE);

const FACULTIES = ['FMIPA', 'SITH', 'SF', 'FTTM', 'FITB', 'FTI', 'STEI', 'FTMD', 'FTSL', 'SAPPK', 'FSRD', 'SBM', 'SPS', 'NONFS'];

const STUDIES = {
    'FMIPA': {
        'sarjana': [
            {code: 101, name: 'Matematika'},
            {code: 102, name: 'Fisika'},
            {code: 103, name: 'Astronomi'},
            {code: 105, name: 'Kimia'},
            {code: 108, name: 'Aktuaria'},
            {code: 160, name: 'Tahan Tahun Pertama FMIPA'},
        ],
        'magister': [
            {code: 201, name: 'Matematika'},
            {code: 202, name: 'Fisika'},
            {code: 203, name: 'Astronomi'},
            {code: 205, name: 'Kimia'},
            {code: 208, name: 'Aktuaria'},
            {code: 209, name: 'Sains Komputasi'},
            {code: 246, name: 'Pengajaran Matematika'},
            {code: 247, name: 'Pengajaran Fisika'},
            {code: 248, name: 'Pengajaran Kimia'},
            {code: 249, name: 'Ilmu dan Rekayasa Nuklir'},
        ],
        'doktor': [
            {code: 301, name: 'Matematika'},
            {code: 302, name: 'Fisika'},
            {code: 303, name: 'Astronomi'},
            {code: 305, name: 'Kimia'},
            {code: 349, name: 'Rekayasa Nuklir'},
        ]
    },
    'SITH': [], 
    'SF': [], 
    'FTTM': [], 
    'FITB': [], 
    'FTI': [], 
    'STEI': {

    }, 
    'FTMD': [], 
    'FTSL': [], 
    'SAPPK': [], 
    'FSRD': [], 
    'SBM': [], 
    'SPS': [], 
    'NONFS': []
}

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
            <TableContent>{`${subject.study.code} - ${subject.study.name}`}</TableContent>
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
            {subjects.length === 0 &&
                <div className="w-full flex flex-row justify-center py-[20px]">
                    <span className="text-seven-font-size-table-content">Tidak ada mata kuliah yang memenuhi</span>
                </div>
            }
        </div>
    )
}

const FacultyFilter = ({faculties = [], onChange}) => {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className="space-x-2 border border-seven-border-filter min-w-max py-[5px] px-[10px] h-fit text-seven-filter !text-seven-font-size-filter">
                <SelectValue className="" placeholder='Fakultas' />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
                {faculties.map((elmt, idx) => (
                    <SelectItem key={idx} value={elmt} className="!text-seven-font-size-filter">{elmt}</SelectItem>
                ))
                }
            </SelectContent>
        </Select>
    )
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
const StudyFilter = ({studies, onChange}) => {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className="space-x-2 border border-seven-border-filter min-w-max py-[5px] px-[10px] h-fit text-seven-filter !text-seven-font-size-filter">
                <SelectValue className="" placeholder='Program Studi' />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]">
                {studies && Object.keys(studies).map((elmt, idx) => (
                    <SelectGroup key={idx}>
                        <SelectLabel>{capitalizeFirstLetter(elmt)}</SelectLabel>
                        {studies[elmt].map((elmt, idx) => (
                            <SelectItem 
                                key={elmt + idx} 
                                className="!text-seven-font-size-filter" 
                                value={elmt.code}
                            >{`${elmt.code} - ${elmt.name}`}</SelectItem>
                        ))}
                    </SelectGroup>
                ))}
                {!studies &&
                    <SelectItem disabled className="!text-seven-font-size-filter" value={null}>Pilih Fakultas Terlebih Dahulu</SelectItem>
                }
            </SelectContent>
        </Select>
    )
}
const CategoryFilter = ({onChange}) => {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger className="space-x-2 border border-seven-border-filter min-w-max py-[5px] px-[10px] h-fit text-seven-filter !text-seven-font-size-filter">
                <SelectValue className="" placeholder='Kategori' />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="wajib" className="!text-seven-font-size-filter">Wajib</SelectItem>
                <SelectItem value="pilihan" className="!text-seven-font-size-filter">Pilihan</SelectItem>
            </SelectContent>
        </Select>
    )
}

const SubjectPageSelect = ({onChange, totalPage, defaultValue}) => {
    return (
        <Select defaultValue={defaultValue} onValueChange={onChange}>
            <SelectTrigger className="space-x-2 border border-seven-border-filter min-w-max py-[5px] px-[10px] h-fit text-seven-filter !text-seven-font-size-filter">
                <SelectValue className="" placeholder='Page' />
            </SelectTrigger>
            <SelectContent>
                {Array.from({ length: totalPage }, (_, idx) => (
                    <SelectItem key={idx} value={idx + 1}>{idx + 1}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

const getSubjects = ({page, faculty, studyCode, category, search}) => {

    search = search.toLowerCase();

    const result = DEFAULT_SUBJECTS.filter((elmt) => {
        if (faculty && elmt.faculty !== faculty) return false;
        if (studyCode && elmt.study.code !== studyCode) return false;
        if (category && elmt.category !== category) return false;
        if (search && !(elmt.code.toLowerCase().includes(search) || elmt.name.toLowerCase().includes(search))) return false;
        return true;

    }).slice((page-1) * PAGE_SIZE, PAGE_SIZE);

    console.log(result);
    return result;
}

const DaftarMataKuliah = () => {

    const [subjects, setSubjects] = useState(DEFAULT_SUBJECTS.slice(0, PAGE_SIZE));
    const [showFilter, setShowFilter] = useState(false);

    const [faculty, setFaculty] = useState(null);

    const pageRef = useRef(1);
    const facultyRef = useRef(null);
    const studyCodeRef = useRef(null);
    const categoryRef = useRef(null);
    const searchRef = useRef('');

    const setFacultyState = (value) => {
        facultyRef.current = value;
        setFaculty(value);
    }

    const getCurrentSubjects = () => {
        return getSubjects({
            page: pageRef.current, 
            faculty, 
            studyCode: studyCodeRef.current, 
            category: categoryRef.current, 
            search: searchRef.current
        })
    }

    const onSelectPage = (value) => {
        pageRef.current = value;
        setSubjects(getCurrentSubjects())
    }

    const onSelectFaculty = (value) => {
        pageRef.current = 1;
        setFacultyState(value);
        setSubjects(getCurrentSubjects());
    }

    const onSelectStudy = (value) => {
        pageRef.current = 1;
        studyCodeRef.current = value;
        setSubjects(getCurrentSubjects());
    }

    const onSelectCategory = (value) => {
        pageRef.current = 1;
        categoryRef.current = value;
        setSubjects(getCurrentSubjects());
    }

    const onSearch = () => {
        pageRef.current = 1;
        setSubjects(getCurrentSubjects());
    }

    return ( 
        <PageTemplate pageTitle='Daftar Mata Kuliah' breadCrumbs={[{href: '/daftar-mata-kuliah', label: 'Daftar Mata Kuliah'}]}>
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
                <div className="flex flex-row gap-5 w-full">
                    <div className="w-fit">
                        <SubjectPageSelect totalPage={TOTAL_PAGE} onChange={onSelectPage}/>
                    </div>
                    <div className="flex flex-row w-full sm:max-w-[500px]">
                        <input onChange={e => searchRef.current = e.target.value} placeholder="Cari kode atau nama mata kuliah" maxLength={255} className="border border-seven-border-button-primary rounded-l-sm outline-none text-seven-filter text-seven-font-size-filter px-[12px] w-full"></input>
                        <Button onClick={onSearch} className="h-fit px-[12px] py-[9px] bg-seven-bg-button-primary border border-l-0 border-seven-border-button-primary rounded-none rounded-r-sm hover:bg-seven-bg-button-primary-hover">
                            <FaSearch size={12}/>
                        </Button>
                    </div>
                </div>
  
                <div className="flex flex-row gap-4 items-center w-full sm:w-auto justify-end">
                    {showFilter &&
                        <div className="flex flex-row gap-4 items-center w-full">
                            <FacultyFilter faculties={FACULTIES} onChange={onSelectFaculty}/>
                            <StudyFilter studies={STUDIES[faculty]} onChange={onSelectStudy}/>
                            <CategoryFilter onChange={onSelectCategory}/>
                        </div>
                    }
                    <Button className="h-fit px-[12px] py-[9px] bg-seven-bg-button-primary border border-seven-border-button-primary hover:bg-seven-bg-button-primary-hover" onClick={() => {setShowFilter(oldValue => !oldValue)}}>
                        <FaFilter size={12}/>
                    </Button>
                </div>
            </div>
            <SubjectsTable subjects={subjects}/>
        </PageTemplate>
    );
}
 
export default DaftarMataKuliah;