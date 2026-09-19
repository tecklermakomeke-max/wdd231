const byuiCourse = {
  code: "CSE121b",
  title: "JavaScript Language",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" },
    { sectionNum: 3, roomNum: "STC 350", enrolled: 20, days: "MW", instructor: "Bro Q" }
  ],
  changeEnrollment: function (sectionNum, add = true) {
    const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum);
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
    }
  }
};
export default byuiCourse;