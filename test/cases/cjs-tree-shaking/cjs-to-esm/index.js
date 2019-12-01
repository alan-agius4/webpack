it("should allow to require esm", () => {
	expect(require("./module").abc).toBe("abc");
});
