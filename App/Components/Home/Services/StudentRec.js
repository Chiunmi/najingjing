import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Colors from "../../../../assets/Shared/Colors";
import { Table, Row } from 'react-native-table-component';

const levelsData = {
  juniorHighSchool: [
    { label: "Grade 7", sections: ["Section 1", "Section 2", "Section 3"] },
    { label: "Grade 8", sections: ["Section A", "Section B", "Section C"] },
    // Add more grades and sections as needed
  ],
  seniorHighSchool: [
    { label: "Grade 11", sections: ["ABM", "HUMSS", "STEM"] },
    { label: "Grade 12", sections: ["ABM", "HUMSS", "STEM", "TECHVOC"] },
    // Add more grades and sections as needed
  ],
  college: [
    { label: "COI", sections: ["BSCS", "BSIT", "BMMA", "BSCPE"] },
  ],
};

const strandsData = {
  ABM: ["Accountancy", "Business Management", "Marketing"],
  HUMSS: ["Humanities", "Social Sciences"],
  STEM: ["Science", "Technology", "Engineering", "Mathematics"],
};

const strandsData2 = {
  ABM: ["Accountancy", "Business Management", "Marketing"],
  HUMSS: ["Humanities", "Social Sciences"],
  STEM: ["Science", "Technology", "Engineering", "Mathematics"],
  TECHVOC: ["Technology", "Vocational"],
};

const yearLevel = {
  BSCS: ["1st year", "2nd year", "3rd year", "4th year"],
  BSIT: ["1st year", "2nd year", "3rd year", "4th year"],
  BMMA: ["1st year", "2nd year", "3rd year", "4th year"],
  BSCPE: ["1st year", "2nd year", "3rd year", "4th year"],
};

const studentsData = {
  students: [
    { id: 1, firstName: 'Kobe', lastName: 'Capunggan', department: 'college' , section: 'BSCS', year: '3rd year' },
    { id: 2, firstName: 'John', lastName: 'Doe', department: 'college' , section: 'BSCS', year: '1st year' },
    { id: 3, firstName: 'Jane', lastName: 'Smith', department: 'seniorHighSchool' , strand: 'HUMSS', year: 'Grade 11', section: 'Humanities'},
    { id: 4, firstName: 'Alice', lastName: 'Johnson', department: 'seniorHighSchool' , strand: 'STEM', year: 'Grade 12', section: 'Science'},
    { id: 5, firstName: 'Bob', lastName: 'Williams', department: 'college' , section: 'BSCPE', year: '3rd year' },
    { id: 6, firstName: 'David', lastName: 'Brown', department: 'juniorHighSchool' , grade: 'Grade 7', section: 'Section 1' },
    { id: 7, firstName: 'Emily', lastName: 'Jones', department: 'juniorHighSchool' , grade: 'Grade 7', section: 'Section 2' },
    { id: 8, firstName: 'Michael', lastName: 'Taylor', department: 'juniorHighSchool' , grade: 'Grade 8', section: 'Section A' },
    { id: 9, firstName: 'Sophia', lastName: 'Miller', department: 'juniorHighSchool' , grade: 'Grade 8', section: 'Section B' },
  ],
};

export default function StudentRec() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedStrand, setSelectedStrand] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [filteredStudents, setFilteredStudents] = useState(studentsData.students);
  const [sortDirection, setSortDirection] = useState('asc'); // Sorting direction (asc / desc)
  const [sortBy, setSortBy] = useState('id'); // Attribute to sort by

  const handleLevelPress = (level) => {
    setSelectedLevel(level);
    setSelectedGrade(null);
    setSelectedSection(null);
    setSelectedStrand(null);
    setSelectedYear(null);
    if (level === 'juniorHighSchool') {
      // Filter the students to show only those in the juniorHighSchool department
      const juniorHighSchoolStudents = studentsData.students.filter((student) => student.department === 'juniorHighSchool');
      setFilteredStudents(juniorHighSchoolStudents);
    } else {
      // If another level is selected, show all students
      setFilteredStudents(studentsData.students);
      if (level === 'juniorHighSchool') {
        // Filter the students to show only those in the juniorHighSchool department
        const juniorHighSchoolStudents = studentsData.students.filter((student) => student.department === 'juniorHighSchool');
        setFilteredStudents(juniorHighSchoolStudents);
      } else if (level === 'seniorHighSchool') {
        // Filter the students to show only those in the seniorHighSchool department
        const seniorHighSchoolStudents = studentsData.students.filter((student) => student.department === 'seniorHighSchool');
        setFilteredStudents(seniorHighSchoolStudents);
      } else if (level === 'college') {
        // Filter the students to show only those in the college department
        const collegeStudents = studentsData.students.filter((student) => student.department === 'college');
        setFilteredStudents(collegeStudents);
      }
    }
    setSortBy('id');
    setSortDirection('asc'); // Set sorting direction to ascending
  };
  
  const handleGradePress = (grade) => {
    setSelectedGrade(grade);
    setSelectedSection(null);
    setSelectedStrand(null);
    setSelectedYear(null);
  
    // Check if the selected level is juniorHighSchool or seniorHighSchool
    if (selectedLevel === 'juniorHighSchool') {
      // Filter the students based on the selected grade within the juniorHighSchool department
      const filtered = studentsData.students.filter((student) => {
        return student.department === 'juniorHighSchool' && student.grade === grade;
      });
      setFilteredStudents(filtered);
    } else if (selectedLevel === 'seniorHighSchool') {
      // Filter the students based on the selected grade within the seniorHighSchool department
      const filtered = studentsData.students.filter((student) => {
        return student.department === 'seniorHighSchool' && student.year === grade;
      });
      setFilteredStudents(filtered);
    }
  
    setSortBy('id');
    setSortDirection('asc'); // Set sorting direction to ascending
  };
  
  
  const handleSectionPress = (section) => {
    setSelectedSection(section);
    setSelectedStrand(null);
    setSelectedYear(null);
    if (selectedLevel === 'juniorHighSchool') {
      // Filter the students based on the selected section within the juniorHighSchool department
      const filtered = studentsData.students.filter((student) => {
        return student.department === 'juniorHighSchool' && student.section === section;
      });
      setFilteredStudents(filtered);
    }
    setSortBy('id');
    setSortDirection('asc'); // Set sorting direction to ascending
  };
  
  const handleStrandPress = (strand) => {
    setSelectedStrand(strand);
    setSelectedYear(null);
    
    if (selectedLevel === "seniorHighSchool" && selectedGrade && selectedSection) {
      // Filter the students based on the selected strand within the seniorHighSchool department
      const filtered = filterStudents(selectedLevel, selectedGrade, selectedSection, strand, selectedYear);
      setFilteredStudents(filtered);
    }
    
    setSortBy('id');
    setSortDirection('asc'); // Set sorting direction to ascending
  };
  
  const handleYearPress = (year) => {
    setSelectedYear(year);
    if (selectedLevel && selectedGrade && selectedSection && selectedStrand) {
      filterStudents(selectedLevel, selectedGrade, selectedSection, selectedStrand, year);
    }
    setSortBy('id');
    setSortDirection('asc'); // Set sorting direction to ascending
  };

  const filterStudents = (level, grade, section, strand, year) => {
    const filtered = studentsData.students.filter((student) => {
      if (student.department === level) {
        if (level === 'juniorHighSchool' || level === 'college') {
          return student.section === section && student.year === year;
        } else if (level === 'seniorHighSchool') {
          if (grade === 'Grade 11') {
            return student.section === section && student.year === year;
          } else if (grade === 'Grade 12') {
            if (section === 'TECHVOC') { // Handle TECHVOC strand separately
              return student.section === section && student.year === year;
            } else {
              return student.section === section && student.strand === strand && student.year === year;
            }
          }
        }
      }
      return false;
    });
  
    // If the selected level is seniorHighSchool, further filter by strand if it's selected
    if (level === 'seniorHighSchool' && strand) {
      return filtered.filter((student) => student.strand === strand);
    }
  
    return filtered;
  };
  
  


  const handleSort = (attribute) => {
    if (sortBy === attribute) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(attribute);
      setSortDirection('asc');
    }
  };

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortDirection === 'asc') {
      if (sortBy === 'firstName' || sortBy === 'lastName' || sortBy === 'department' || sortBy === 'year' || sortBy === 'section') {
        return a[sortBy].localeCompare(b[sortBy]);
      } else {
        return a[sortBy] - b[sortBy];
      }
    } else {
      if (sortBy === 'firstName' || sortBy === 'lastName' || sortBy === 'department' || sortBy === 'year' || sortBy === 'section') {
        return b[sortBy].localeCompare(a[sortBy]);
      } else {
        return b[sortBy] - a[sortBy];
      }
    }
  });

  return (
    <ScrollView>
      <View style={{ paddingTop: 10 }}>
        {/* Level */}
        <View style={styles.container}>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row" }}>
              {Object.keys(levelsData).map((level) => (
                <TouchableOpacity
                  key={level}
                  style={[styles.containerButton, selectedLevel === level && styles.containerButtonClicked]}
                  onPress={() => handleLevelPress(level)}
                >
                  <Text style={styles.containerText}>{level}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Grade */}
        {selectedLevel && (
          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View style={{ flexDirection: "row" }}>
                {levelsData[selectedLevel].map((grade) => (
                  <TouchableOpacity
                    key={grade.label}
                    style={[styles.containerButton, selectedGrade === grade.label && styles.containerButtonClicked]}
                    onPress={() => handleGradePress(grade.label)}
                  >
                    <Text style={styles.containerText}>{grade.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        )}

        {/* Section */}
        {selectedGrade && (
          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View style={{ flexDirection: "row" }}>
                {levelsData[selectedLevel].find((grade) => grade.label === selectedGrade).sections.map((section) => (
                  <TouchableOpacity
                    key={section}
                    style={[styles.containerButton, selectedSection === section && styles.containerButtonClicked]}
                    onPress={() => handleSectionPress(section)}
                  >
                    <Text style={styles.containerText}>{section}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        )}

        {/* Strand */}
        {(selectedLevel === "seniorHighSchool" && selectedGrade === "Grade 11" && selectedSection) && (
          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View style={{ flexDirection: "row" }}>
                {strandsData[selectedSection].map((strand) => (
                  <TouchableOpacity
                    key={strand}
                    style={[styles.containerButton, selectedStrand === strand && styles.containerButtonClicked]}
                    onPress={() => handleStrandPress(strand)}
                  >
                    <Text style={styles.containerText}>{strand}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        )}

        {/* Strand */}
        {(selectedLevel === "seniorHighSchool" && selectedGrade === "Grade 12" && selectedSection) && (
          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View style={{ flexDirection: "row" }}>
                {strandsData2[selectedSection].map((strand) => (
                  <TouchableOpacity
                    key={strand}
                    style={[styles.containerButton, selectedStrand === strand && styles.containerButtonClicked]}
                    onPress={() => handleStrandPress(strand)}
                  >
                    <Text style={styles.containerText}>{strand}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        )}

        {/* Year */}
        {selectedLevel === "college" && selectedGrade && selectedSection && (
          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View style={{ flexDirection: "row" }}>
                {yearLevel[selectedSection].map((year) => (
                  <TouchableOpacity
                    key={year}
                    style={[styles.containerButton, selectedYear === year && styles.containerButtonClicked]}
                    onPress={() => handleYearPress(year)}
                  >
                    <Text style={styles.containerText}>{year}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        )}
      </View>

      {/* Table */}
      <View style={styles.tableContainer}>
      <Table>
  <Row
    data={['ID', 'First Name', 'Last Name', 'Department/Strand', 'Grade/Year Level', 'Section']}
    style={styles.tableHeader}
    textStyle={styles.headerText}
  />
  {sortedStudents.map((student) => (
    <Row
      key={student.id}
      data={[
        student.id.toString(),
        student.firstName,
        student.lastName,
        student.department === 'college' ? student.section : student.department === 'juniorHighSchool' ? 'Junior High School' : student.strand || '',
        student.department === 'juniorHighSchool' ? student.grade : student.year || '',
        student.section || student.section,
      ]}
      style={styles.tableRow}
      textStyle={styles.tableText}
    />
  ))}
</Table>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.cobaltblue,
    alignContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 29,
    margin: 5,
  },
  containerText: {
    color: Colors.cobaltblue,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerButton: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 10,
    margin: 10,
  },
  containerButtonClicked: {
    backgroundColor: "gray",
  },
  tableContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: Colors.grey,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  tableHeader: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    borderRadius: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginBottom: 5,
    elevation: 2,
  },
  tableText: {
    textAlign: "center",
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

