const Authlayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="flex item-center justfy-center h-full">
            {children}
        </div>
    );
}

export default Authlayout;