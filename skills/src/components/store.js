export const store = {
  state: {
    skills: [{ skill: "Vue.js", id: 0 }, { skill: "Frontend Developer", id: 1 }]
  },
  addSkill(newSkill) {
    this.state.skills.push({
      skill: newSkill,
      id: Math.floor(1000000 * Math.random())
    });
  },
  removeSkill(id) {
    this.state.skills = this.state.skills.filter(item => id !== item.id);
  },
  getAll() {
    return this.state.skills;
  }
};
