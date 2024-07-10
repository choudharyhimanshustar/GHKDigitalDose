export default function AdmissionDropDownMenu() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <div
        className="dropdown"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
        <div className="dropdown-button">Admissions</div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <NavLink to="/admission/document" className="nav-link">
              Admission Document
            </NavLink>
            <NavLink to="/admission/rule" className="nav-link">
              Rule and Regulations
            </NavLink>
            <NavLink to="/councelling" className="nav-link">
              Admission Councelling
            </NavLink>
            <NavLink to="/admissionform" className="nav-link">
              Admission Form
            </NavLink>
            <NavLink to="/admission/transport" className="nav-link">
              Transport Facility
            </NavLink>
            <NavLink to="/SchoolTiming" className="nav-link">
              School and College Timings
            </NavLink>
          </div>
        )}
      </div>
    );
  }