export default class ProjectsRepository {
  async getProjects() {
    return [
      {
        id: 1,
        name: "Project 1",
        description: "Project 1 description",
        status: "active",
        logo: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Project 2",
        description: "Project 2 description",
        status: "active",
        logo: "https://via.placeholder.com/150",
      },
    ];
  }
}
