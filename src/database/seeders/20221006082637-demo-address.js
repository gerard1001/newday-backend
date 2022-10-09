module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Addresses",
      [
        {
          addressId: "aaddc93f-16a3-47c8-a4ad-d39c7a1f264d",
          profileId: "fa1a5ff5-6853-4165-a7fc-1fe39a26691a",
          country: "Rwanda",
          city: "Kigali",
          street: "KN-001",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          addressId: "cad6ce44-9247-4a25-855c-970dbdced26e",
          profileId: "1df916ed-8de3-4fa1-adde-b5a5b1246a78",
          country: "Uganda",
          city: "Kampala",
          street: "KP-566",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          addressId: "a3d7cb15-0cec-4941-8bb2-227446b4bc95",
          profileId: "6a9b7d6f-55c4-49f7-b6a7-632f3925deb9",
          country: "Tanzania",
          city: "Mwanza",
          street: "MW-101",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          addressId: "3e338eef-c901-4966-b66b-ee2c34b24802",
          profileId: "da672281-23d2-40af-97f9-a0d20609636a",
          country: "Kenya",
          city: "Mombasa",
          street: "MB-290",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Addresses", null, {});
  },
};
