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
import { useEffect, useRef, useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import {DEFAULT_SUBJECTS, PAGE_SIZE, FACULTIES, STUDIES} from '@/app/daftar-mata-kuliah/data';

const { default: PageTemplate } = require("@/components/PageTemplate")


const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const TableContent = ({children, isHeader = false}) => {
    return isHeader ? (
        <th className="p-2">{children}</th>
    ) : (
        <td className="px-2 py-[20px]">{children}</td>
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

    });

    const start = (page-1) * PAGE_SIZE;
    return {
        data: result.slice(start, start + PAGE_SIZE),
        total_page: Math.ceil(result.length / PAGE_SIZE)
    };
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
            <TableContent>{ subject.category}</TableContent>
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

const FacultyFilter = ({faculties = [], value, onChange}) => {

    const selectedValueRef = useRef(value);
    const changeRef = useRef(true);

    const onValueChange = (value) => {
        selectedValueRef.current = value;
    }

    const onClickOutside = () => {
        changeRef.current = false;
    }

    const onClose = () => {

        if (!changeRef.current) {
            changeRef.current = true;
            return;
        };

        if (value === selectedValueRef.current)
        {
            selectedValueRef.current = "";
        }

        onChange(selectedValueRef.current);
    }

    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="space-x-2 border border-seven-border-filter min-w-max py-[5px] px-[10px] h-fit text-seven-filter !text-seven-font-size-filter">
                <SelectValue className="" placeholder='Fakultas' />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]" onCloseAutoFocus={onClose} onPointerDownOutside={onClickOutside}>
                {faculties.map((elmt, idx) => (
                    <SelectItem key={idx} value={elmt} className="!text-seven-font-size-filter">{elmt}</SelectItem>
                ))
                }
            </SelectContent>
        </Select>
    )
}
  
const StudyFilter = ({studies, value, onChange}) => {

    const selectedValueRef = useRef(value);
    const changeRef = useRef(true);

    const onValueChange = (value) => {
        selectedValueRef.current = value;
    }

    const onClickOutside = () => {
        changeRef.current = false;
    }

    const onClose = () => {

        if (!changeRef.current) {
            changeRef.current = true;
            return;
        };

        if (value === selectedValueRef.current)
        {
            selectedValueRef.current = "";
        }

        onChange(selectedValueRef.current);
    }

    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="space-x-2 border border-seven-border-filter min-w-max py-[5px] px-[10px] h-fit text-seven-filter !text-seven-font-size-filter">
                <SelectValue className="" placeholder='Program Studi' />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]" onCloseAutoFocus={onClose} onPointerDownOutside={onClickOutside}>
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
                    <SelectItem disabled className="!text-seven-font-size-filter pr-8" value={null}>Pilih Fakultas Terlebih Dahulu</SelectItem>
                }
                {studies && Object.keys(studies).length === 0 &&
                    <SelectItem disabled className="!text-seven-font-size-filter pr-8" value={null}>Tidak ada program studi</SelectItem>
                }
            </SelectContent>
        </Select>
    )
}

const CategoryFilter = ({onChange, value}) => {

    const selectedValueRef = useRef(value);
    const changeRef = useRef(true);

    const onValueChange = (value) => {
        selectedValueRef.current = value;
    }

    const onClickOutside = () => {
        changeRef.current = false;
    }

    const onClose = () => {

        if (!changeRef.current) {
            changeRef.current = true;
            return;
        };

        if (value === selectedValueRef.current)
        {
            selectedValueRef.current = "";
        }

        onChange(selectedValueRef.current);
    }

    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="space-x-2 border border-seven-border-filter min-w-max py-[5px] px-[10px] h-fit text-seven-filter !text-seven-font-size-filter">
                <SelectValue className="" placeholder='Kategori' />
            </SelectTrigger>
            <SelectContent onCloseAutoFocus={onClose} onPointerDownOutside={onClickOutside}>
                <SelectItem value="wajib" className="!text-seven-font-size-filter">Wajib</SelectItem>
                <SelectItem value="pilihan" className="!text-seven-font-size-filter">Pilihan</SelectItem>
            </SelectContent>
        </Select>
    )
}

const SubjectPageSelect = ({onChange, totalPage, defaultValue}) => {
    return (
        <Select defaultValue={totalPage > 0 ? defaultValue : null} onValueChange={onChange}>
            <SelectTrigger className="space-x-2 border border-seven-border-filter min-w-max py-[5px] px-[10px] h-fit text-seven-filter !text-seven-font-size-filter">
                <SelectValue className="" placeholder='Page' />
            </SelectTrigger>
            <SelectContent>
                {Array.from({ length: totalPage }, (_, idx) => (
                    <SelectItem className="!text-seven-font-size-filter" key={idx} value={idx + 1}>{idx + 1}</SelectItem>
                ))}

                {totalPage === 0 &&
                    <SelectItem className="!text-seven-font-size-filter pr-8" disabled>Tidak ada halaman</SelectItem>
                }
            </SelectContent>
        </Select>
    )
}

const DaftarMataKuliah = () => {

    const [subjects, setSubjects] = useState(DEFAULT_SUBJECTS.slice(0, PAGE_SIZE));
    const [showFilter, setShowFilter] = useState(false);

    const [faculty, setFaculty] = useState("");
    const [studyCode, setStudyCode] = useState("");
    const [category, setCategory] = useState("");

    const [totalPage, setTotalPage] = useState(Math.ceil(DEFAULT_SUBJECTS.length / PAGE_SIZE));

    const pageRef = useRef(1);
    const facultyRef = useRef(faculty);
    const studyCodeRef = useRef(studyCode);
    const categoryRef = useRef(category);
    const searchRef = useRef('');

    const setFacultyState = (value) => {
        facultyRef.current = value;
        setFaculty(value);
    }

    const setStudyCodeState = (value) => {
        studyCodeRef.current = value;
        setStudyCode(value);
    }

    const setCategoryState = (value) => {
        categoryRef.current = value;
        setCategory(value);
    }

    const getCurrentSubjects = () => {
        const result = getSubjects({
            page: pageRef.current, 
            faculty: facultyRef.current, 
            studyCode: studyCodeRef.current, 
            category: categoryRef.current, 
            search: searchRef.current
        })

        setTotalPage(result.total_page);

        return result.data;
    }

    const onSelectPage = (value) => {
        pageRef.current = value;
        setSubjects(getCurrentSubjects())
    }

    const onSelectFaculty = (value) => {
        pageRef.current = 1;

        setStudyCodeState("");

        setFacultyState(value);
        setSubjects(getCurrentSubjects());
    }

    const onSelectStudy = (value) => {
        pageRef.current = 1;

        setStudyCodeState(value);
        setSubjects(getCurrentSubjects());
    }

    const onSelectCategory = (value) => {
        pageRef.current = 1;

        setCategoryState(value);
        setSubjects(getCurrentSubjects());
    }

    const onSearch = () => {
        pageRef.current = 1;
        setSubjects(getCurrentSubjects());
    }

    const onEnterSearch = (event) => {
        // Check if the pressed key is Enter (key code 13)
        if (event.key === 'Enter') {
            onSearch();
        }
    }

    return ( 
        <PageTemplate pageTitle='Daftar Mata Kuliah' breadCrumbs={[{href: '/daftar-mata-kuliah', label: 'Daftar Mata Kuliah'}]}>
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
                <div className="flex flex-row gap-5 w-full">
                    <div className="w-fit">
                        <SubjectPageSelect totalPage={totalPage} onChange={onSelectPage} defaultValue={pageRef.current}/>
                    </div>
                    <div className="flex flex-row w-full sm:max-w-[500px]">
                        <input onKeyDown={onEnterSearch} onChange={e => searchRef.current = e.target.value} placeholder="Cari kode atau nama mata kuliah" maxLength={255} className="border border-seven-border-button-primary rounded-l-sm outline-none text-seven-filter text-seven-font-size-filter px-[12px] w-full"></input>
                        <Button onClick={onSearch} className="h-fit px-[12px] py-[9px] bg-seven-bg-button-primary border border-l-0 border-seven-border-button-primary rounded-none rounded-r-sm hover:bg-seven-bg-button-primary-hover">
                            <FaSearch size={12}/>
                        </Button>
                    </div>
                </div>
  
                <div className="flex flex-row gap-4 items-center w-full sm:w-auto justify-end">
                    {showFilter &&
                        <div className="flex flex-row gap-4 items-center w-full">
                            <FacultyFilter value={faculty} faculties={FACULTIES} onChange={onSelectFaculty}/>
                            <StudyFilter value={studyCode} studies={STUDIES[faculty]} onChange={onSelectStudy}/>
                            <CategoryFilter value={category} onChange={onSelectCategory}/>
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