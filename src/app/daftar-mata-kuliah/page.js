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
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight } from "lucide-react";

const { default: PageTemplate } = require("@/components/PageTemplate")


const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

const TableContent = ({children, isHeader = false, className}) => {
    return isHeader ? (
        <th className={`p-2 ${className}`}>{children}</th>
    ) : (
        <td className={`px-2 py-[20px] z-[500] ${className}`}>{children}</td>
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

const getScheduleHref = (subject) => {
    return `/jadwal#${subject.code}`;
}

const SubjectRow = ({subject, idx, isJadwalHintOpen, isSilabusHintOpen, handleSilabusHintChange, handleJadwalHintChange}) => {

    const silabus_href = `/kurikulum/silabus/${subject.code}`
    return (
        <tr className={`${idx % 2 === 1 ? 'bg-seven-bg-table' : ''} text-seven-font-size-table-content border-b-[1px] border-seven-border-grey align-top`}>
            {idx === 0 ?
                (
                    <>
                        <TableContent>
                            <TooltipProvider>
                                <Tooltip open={isSilabusHintOpen} onOpenChange={handleSilabusHintChange}>
                                    <TooltipTrigger asChild>
                                        <Link className={`underline text-seven-hyperlink hover:text-seven-hyperlink-hover font-medium ${isSilabusHintOpen ? 'absolute z-10' : ''}`} href={silabus_href}>{subject.code}</Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <div className="sm:max-w-[500px]">
                                            <p className="text-seven-font-size-filter">Pranala silabus mata kuliah</p>
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </TableContent>
                        <TableContent>
                            <Link className={`underline text-seven-hyperlink hover:text-seven-hyperlink-hover ${isSilabusHintOpen ? 'absolute z-10' : ''}`} href={silabus_href}>{subject.name}</Link>
                        </TableContent>
                    </>
                ) :
                (
                    <>
                    <TableContent>
                        <Link className="underline text-seven-hyperlink hover:text-seven-hyperlink-hover font-medium" href={silabus_href}>{subject.code}</Link>
                    </TableContent>
                    <TableContent>
                        <Link className="underline text-seven-hyperlink hover:text-seven-hyperlink-hover" href={silabus_href}>{subject.name}</Link>
                    </TableContent>
                    </>
                )
            }
            <TableContent>{subject.faculty}</TableContent>
            <TableContent>{`${subject.study.code} - ${subject.study.name}`}</TableContent>
            <TableContent>{ capitalizeFirstLetter(subject.category)}</TableContent>

            {idx === 0 ?
                (
                    <TableContent>
                        <TooltipProvider>
                            <Tooltip open={isJadwalHintOpen} onOpenChange={handleJadwalHintChange}>
                                <TooltipTrigger asChild>
                                    <Link className={`underline text-seven-hyperlink hover:text-seven-hyperlink-hover ${isJadwalHintOpen ? 'absolute z-10' : ''}`} href={getScheduleHref(subject)}>Link</Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div className="sm:max-w-[500px]">
                                        <p className="text-seven-font-size-filter">Pranala jadwal dan ruang mata kuliah</p>
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </TableContent>
                ) :
                (
                    <TableContent>
                        <Link className={`underline text-seven-hyperlink hover:text-seven-hyperlink-hover`} href={getScheduleHref(subject)}>Link</Link>
                    </TableContent>
                )
            }
        </tr>
    )
}

const SubjectsTable = ({subjects = [], isJadwalHintOpen, isSilabusHintOpen, handleSilabusHintChange, handleJadwalHintChange}) => {
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
                        <SubjectRow key={idx} idx={idx} subject={elmt} isJadwalHintOpen={isJadwalHintOpen} isSilabusHintOpen={isSilabusHintOpen} handleSilabusHintChange={handleSilabusHintChange} handleJadwalHintChange={handleJadwalHintChange}/>
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
                                className="!text-seven-font-size-filter pr-8" 
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

function isNotPrefixOfAny(number, n) {
    for (let i = 1; i <= n; i++) {
        if (String(i).startsWith(String(number))) {
            return false; // The number is a prefix of at least one number from 1 to n
        }
    }
    return true; // The number is not a prefix of any number from 1 to n
}

const SubjectPageSelect = ({onChange, totalPage, defaultValue}) => {
    
    const [value, setValue] = useState(defaultValue);
    const searchRef = useRef(null);
    const searchDebounceTimerRef = useRef(null);

    const [search, setSearch] = useState('');

    const onValueChange = (value) => {
        setValue(value);
        onChange(value);
    }

    const onKeyDown = (event) => {

        if (event.key === 'Enter') {
            onSearch();
        }

        if (!(event.key === 'Backspace') && !/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }

    const onSearchChange = (e) => {
        searchRef.current = e.target.value;

        // debounce for onsearch with time 500 ms
        if (searchDebounceTimerRef.current) {
            clearTimeout(searchDebounceTimerRef.current);
        }
      
        // Set a new timeout for 500 milliseconds
        searchDebounceTimerRef.current = setTimeout(() => {
            onSearch();
        }, 250);
    }

    const onSearch = () => {
        if (searchDebounceTimerRef.current) {
            clearTimeout(searchDebounceTimerRef.current);
        }
        setSearch(searchRef.current);
    }
    
    const onClose = () => {
        searchRef.current = '';
        setSearch('');
    }

    useEffect(() => {
        setValue( totalPage ? 1 : '');
    }, [totalPage, setValue])

    // onChange={e => searchRef.current = e.target.value}

    return (
        <Select value={totalPage ? value : ''} onValueChange={onValueChange}>
            <SelectTrigger className="space-x-2 border border-seven-border-filter min-w-max py-[5px] px-[10px] h-fit text-seven-filter !text-seven-font-size-filter" >
                <SelectValue className="" placeholder='Halaman' />
            </SelectTrigger>
            <SelectContent className="max-h-[300px]" onCloseAutoFocus={onClose}>
                <div className="flex flex-row justify-between mb-1">
                    <input onKeyDown={onKeyDown} onChange={onSearchChange} onBlur={e => e.preventDefault()} placeholder="Cari halaman" maxLength={3} className="border border-seven-border-button-primary rounded-sm py-1 outline-none text-seven-filter text-seven-font-size-filter px-[12px] w-full"></input>
                </div>
                {Array.from({ length: totalPage }, (_, idx) => {
                    const val = idx + 1;

                    return  (
                        <SelectItem className={`!text-seven-font-size-filter ${val.toString().startsWith(search) ? '' : 'hidden'}`} key={idx} value={val}>{'\0' + val}</SelectItem>
                    );
                })}

                {(totalPage === 0 || isNotPrefixOfAny(search, totalPage)) &&
                    <SelectItem className="!text-seven-font-size-filter pr-8" disabled>Tidak ada halaman</SelectItem>
                }
            </SelectContent>
        </Select>
    )
}

const DaftarMataKuliah = () => {

    const [subjects, setSubjects] = useState(DEFAULT_SUBJECTS.slice(0, PAGE_SIZE));
    const [showFilter, setShowFilter] = useState(false);

    const [page, setPage] = useState(1);
    const [faculty, setFaculty] = useState("");
    const [studyCode, setStudyCode] = useState("");
    const [category, setCategory] = useState("");

    const FILTER_HINT_KEY = 'filter-hint';
    const SEARCH_HINT_KEY = 'search-hint';
    const SILABUS_HINT_KEY = 'silabus-hint';
    const JADWAL_HINT_KEY = 'jadwal-hint';

    // hints
    const [isFilterHintOpen, setFilterHintOpen] = useState(false);
    const [isSearchHintOpen, setSearchHintOpen] = useState(false);
    const [isSilabusHintOpen, setSilabusHintOpen] = useState(false);
    const [isJadwalHintOpen, setJadwalHintOpen] = useState(false);

    useEffect(() => {
        setFilterHintOpen(!sessionStorage.getItem(FILTER_HINT_KEY));
        setSearchHintOpen(sessionStorage.getItem(FILTER_HINT_KEY) && !sessionStorage.getItem(SEARCH_HINT_KEY));
        setSilabusHintOpen(sessionStorage.getItem(SEARCH_HINT_KEY) && !sessionStorage.getItem(SILABUS_HINT_KEY))
        setJadwalHintOpen(sessionStorage.getItem(SILABUS_HINT_KEY) && !sessionStorage.getItem(JADWAL_HINT_KEY))
    }, [])

    const handleFilterHintChange = (isOpen) => {
        if (!isOpen) {
            setFilterHintOpen(false)
            setSearchHintOpen(true)
            sessionStorage.setItem(FILTER_HINT_KEY, '1');
        }
    }

    const handleSearchHintChange = (isOpen) => {
        if (!isOpen) {
            setSearchHintOpen(false)
            setSilabusHintOpen(true)
            sessionStorage.setItem(SEARCH_HINT_KEY, '1');
        }
    }

    const handleSilabusHintChange = (isOpen) => {
        if (!isOpen) {
            setSilabusHintOpen(false)
            setJadwalHintOpen(true)
            sessionStorage.setItem(SILABUS_HINT_KEY, '1');
        }
    }

    const handleJadwalHintChange = (isOpen) => {
        if (!isOpen) {
            setJadwalHintOpen(false)
            sessionStorage.setItem(JADWAL_HINT_KEY, '1');
        }
    }

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

    const setPageState = (value) => {
        pageRef.current = value;
        setPage(value);
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
        setPageState(value);
        setSubjects(getCurrentSubjects());
    }

    const onSelectFaculty = (value) => {
        setPageState(1);

        setStudyCodeState("");

        setFacultyState(value);
        setSubjects(getCurrentSubjects());
    }

    const onSelectStudy = (value) => {
        setPageState(1);

        setStudyCodeState(value);
        setSubjects(getCurrentSubjects());
    }

    const onNextPage = () => {
        onSelectPage(pageRef.current + 1)
    }

    const onPrevPage = () => {
        onSelectPage(pageRef.current - 1)
    }

    const onSelectCategory = (value) => {
        setPageState(1);

        setCategoryState(value);
        setSubjects(getCurrentSubjects());
    }

    const onSearch = () => {
        setPageState(1);
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
            <div className="flex flex-col gap-2">
                <div className="flex gap-2 sm:gap-5 flex-row sm:justify-between">
                    <div className="flex flex-row gap-2 sm:gap-5 w-full">
                        <TooltipProvider>
                            <Tooltip open={isSearchHintOpen} onOpenChange={handleSearchHintChange}>
                                <TooltipTrigger asChild>
                                    <div className={`flex flex-row w-full sm:max-w-[500px] ${isSearchHintOpen ? 'z-10' : ''}`}>
                                        <input onKeyDown={onEnterSearch} onChange={e => searchRef.current = e.target.value} placeholder="Cari kode atau nama mata kuliah" maxLength={255} className="border border-seven-border-button-primary rounded-l-sm outline-none text-seven-filter text-seven-font-size-filter px-[12px] w-full"></input>
                                        <Button onClick={onSearch} className="h-fit px-[12px] py-[9px] bg-seven-bg-button-primary border border-l-0 border-seven-border-button-primary rounded-none rounded-r-sm hover:bg-seven-bg-button-primary-hover">
                                            <FaSearch size={12}/>
                                        </Button>
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div className="sm:max-w-[500px]">
                                        <p className="text-seven-font-size-filter">Fitur pencarian mata kuliah berdasarkan kode dan nama mata kuliah</p>
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
    
                    <div className="flex flex-row gap-5 items-center w-auto justify-end">
                        {showFilter &&
                            <div className="sm:flex flex-row gap-5 items-center w-full hidden">
                                <FacultyFilter value={faculty} faculties={FACULTIES} onChange={onSelectFaculty}/>
                                <StudyFilter value={studyCode} studies={STUDIES[faculty]} onChange={onSelectStudy}/>
                                <CategoryFilter value={category} onChange={onSelectCategory}/>
                            </div>
                        }

                        <TooltipProvider>
                            <Tooltip open={isFilterHintOpen} onOpenChange={handleFilterHintChange}>
                                <TooltipTrigger asChild>
                                    <Button className={`h-fit px-[12px] py-[9px] bg-seven-bg-button-primary border border-seven-border-button-primary hover:bg-seven-bg-button-primary-hover ${isFilterHintOpen ? 'z-10' : ''}`} onClick={() => {setShowFilter(oldValue => !oldValue)}}>
                                        <FaFilter size={12}/>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <div className="max-w-[200px]">
                                        <p className="text-seven-font-size-filter">Menu filter untuk menyaring daftar mata kuliah yang ingin ditampilkan</p>
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </div>
                {showFilter &&
                    <div className="flex flex-row gap-2 items-center w-full sm:hidden">
                        <FacultyFilter value={faculty} faculties={FACULTIES} onChange={onSelectFaculty}/>
                        <StudyFilter value={studyCode} studies={STUDIES[faculty]} onChange={onSelectStudy}/>
                        <CategoryFilter value={category} onChange={onSelectCategory}/>
                    </div>
                }
            </div>
            <div className="w-full overflow-x-auto">
                <SubjectsTable subjects={subjects} isJadwalHintOpen={isJadwalHintOpen} isSilabusHintOpen={isSilabusHintOpen} handleSilabusHintChange={handleSilabusHintChange} handleJadwalHintChange={handleJadwalHintChange}/>
            </div>
            <div className="w-full flex flex-row justify-between text-seven-font-size-table-content items-center">
                <span>Page <span className="font-medium">{page}</span> of <span className="font-medium">{totalPage}</span></span>

                <div className="flex gap-4">
                    <button onClick={onPrevPage} className="text-seven-font-size-table-content text-seven-foreground-dark bg-seven-bg-button-primary hover:bg-seven-bg-button-primary-hover border-r px-[5px] py-[5px] pr-[10px] border border-seven-border-button-primary rounded-sm flex flex-row items-center"><ChevronLeft size={15}/><span>Prev</span></button>
                    <button onClick={onNextPage} className="text-seven-font-size-table-content text-seven-foreground-dark bg-seven-bg-button-primary hover:bg-seven-bg-button-primary-hover border-r px-[5px] py-[5px] pl-[10px] border border-seven-border-button-primary rounded-sm flex flex-row items-center"><span>Next</span><ChevronRight size={15}/></button>
                </div>
            </div>
            {(isFilterHintOpen || isSearchHintOpen || isSilabusHintOpen || isJadwalHintOpen) &&
                <div className="fixed bg-black opacity-[50%] !top-0 w-screen h-screen !left-0"></div>
            }
        </PageTemplate>
    );
}
 
export default DaftarMataKuliah;