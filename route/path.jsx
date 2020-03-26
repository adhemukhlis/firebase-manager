export const PATH_DIR = {
  provinsi: "/",
  kab_kot: "/:id_provinsi",
  kecamatan: "/:id_provinsi/:id_kab_kot",
  kelurahan: "/:id_provinsi/:id_kab_kot/:id_kecamatan"
};
