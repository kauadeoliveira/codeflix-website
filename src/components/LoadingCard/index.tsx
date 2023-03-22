import ContentLoader from "react-content-loader"

export const LoadingCard = () => {
    return(
        <ContentLoader 
         speed={3}
         width={120}
         height={180}
         viewBox="0 0 120 180"
         backgroundColor="#0a0a0a"
         foregroundColor="#242424"
        >
            <rect x="0" y="0" rx="8" ry="8" width="120" height="180" />
        </ContentLoader>
    )
}