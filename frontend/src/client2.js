import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "s9nxkkv4",
    dataset: "production", // this is from those question during 'sanity init'
    apiVersion: '2021-08-31', // use a UTC date string
    useCdn: true,
});