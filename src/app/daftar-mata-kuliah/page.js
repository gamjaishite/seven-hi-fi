import Link from "next/link";

const { default: PageTemplate } = require("@/components/PageTemplate")

const subjects = [
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

const SubjectsTable = () => {
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
const DaftarMataKuliah = () => {

    return ( 
        <PageTemplate pageTitle='Daftar Mata Kuliah' breadCrumbs={[{href: '/daftar-mata-kuliah', label: 'Daftar Mata Kuliah'}]}>
            <SubjectsTable subjects={subjects}/>
        </PageTemplate>
    );
}
 
export default DaftarMataKuliah;