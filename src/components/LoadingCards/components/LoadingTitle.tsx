import ContentLoader from "react-content-loader"

export const LoadingTitle = () => {
    return(
        <ContentLoader 
        speed={2}
        width={200}
        height={20}
        viewBox="0 0 200 20"
        backgroundColor="#0a0a0a"
        foregroundColor="#242424"
        >
            <rect x="0" y="0" rx="2" ry="2" width="200" height="20" />
        </ContentLoader>
    )
}