
const students = [];

    function submitData() {
      const name = document.getElementById('name').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const marks = parseInt(document.getElementById('marks').value);

      if (!name || !subject || isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter valid data in all fields.");
      }
      else {
        let grade = '';
        if (marks >= 90) grade = ' A';
        else if (marks >= 75) grade = ' B';
        else if (marks >= 50) grade = ' C';
        else grade = ' Fail';

        const studentResult = {
            name: name,
            subject: subject,
            marks: marks,
            grade: grade
        };

        students.push(studentResult);
        alert(`Grade: ${studentResult.grade}`)
        alert(`Student ${students.length} added succesfully
        Student Info:
            Name: ${studentResult.name}
            Subject: ${studentResult.subject}
            Marks: ${studentResult.marks}
            Grade: ${studentResult.grade}
            `);
        console.log(students);

        document.getElementById('name').value = '';
        document.getElementById('subject').value = '';
        document.getElementById('marks').value = '';
      }
    }

    function clearAll() {
      document.getElementById('name').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('marks').value = '';
      students = [];
      console.clear();
      alert("All data cleared.");
    }