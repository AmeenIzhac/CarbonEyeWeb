import styles from "@/styles/ProjectPage.module.scss";

interface DropdownBoxTypes {
  options: string[];
}

interface RecordsColumnTypes {
  entries: string[];
}

export default function ProjectPage() {
  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <ColumnTitles />
          <FiltersDiv />
          <Records />
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src="carbonEyeLogo.png" />
    </div>
  );
}

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.title}>Records</h1>
    </div>
  );
}

function ColumnTitles() {
  return (
    <div className={styles.columnTitlesDiv}>
      <h1>Record Date</h1>
      <h1>Subcontractor</h1>
      <h1>Product Type</h1>
      <h1>Embodied Carbon</h1>
    </div>
  );
}

function FiltersDiv() {
  return (
    <div className={styles.filtersDiv}>
      <InputBox />
      <DropdownBox
        options={["", "Subcontractor 1", "Subcontractor 2", "Subcontractor 3"]}
      />
      <DropdownBox
        options={["", "Product Type 1", "Product Type 2", "Product Type 3"]}
      />
    </div>
  );
}

function InputBox() {
  return (
    <div className={styles.centerHorizontally}>
      <div className={styles.inputBox}>
        <span className="text-gray-400 mr-3">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 21l-4.35-4.35"></path>
            <circle cx="8.5" cy="8.5" r="7.5"></circle>
          </svg>
        </span>
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

function DropdownBox({ options }: DropdownBoxTypes) {
  return (
    <div className={styles.centerHorizontally}>
      <div className={styles.dropdownBox}>
        <select className="block appearance-none w-full bg-transparent border border-gray-300 text-gray-700 h-8 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          {options.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M10 12l-6-6 1.41-1.41L10 9.17l4.59-4.58L16 6l-6 6z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Records() {
  return (
    <div className={styles.recordsContainer}>
      <RecordsColumn
        entries={[
          "10/04/2023",
          "11/04/2023",
          "12/04/2023",
          "13/04/2023",
          "14/04/2023",
          "...",
        ]}
      />
      <RecordsColumn
        entries={[
          "Cilantro",
          "Byrne Bros",
          "Platt & Reilly",
          "Stanmore",
          "Harveys",
          "...",
        ]}
      />
      <RecordsColumn
        entries={[
          "Electical Cables",
          "Structures",
          "Drylining",
          "Drylining",
          "Paint",
          "...",
        ]}
      />
      <RecordsColumn entries={["xxx", "xxx", "xxx", "xxx", "xxx", "..."]} />
    </div>
  );
}

function RecordsColumn({ entries }: RecordsColumnTypes) {
  return (
    <div className={styles.recordsColumn}>
      {entries.map((entry, index) => {
        return <p key={index}>{entry}</p>;
      })}
    </div>
  );
}
