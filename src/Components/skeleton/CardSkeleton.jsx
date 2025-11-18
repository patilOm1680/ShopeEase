import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Box sx={{ pt:4, mt: 7, marginLeft:"160px", marginRight:"100px" }}> 
      <Grid container spacing={3}>
        {Array.from(new Array(8)).map((_, index) => (
          <Grid key={index}>
            <Box
              sx={{
                borderRadius: 2,
                boxShadow: 2,
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#fff",
                height:"530px",
                width:"350px"
              }}
            >
             
              <Skeleton
                variant="rectangular"
                width="330px"
                height={280}
                animation="wave"
                sx={{ borderRadius: 2 }}
              />

              <Skeleton
                variant="text"
                width="80%"
                height={30}
                animation="wave"
                sx={{ mt: 2 }}
              />

              <Skeleton
                variant="text"
                width="90%"
                height={30}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width="70%"
                height={20}
                animation="wave"
              />
                <Skeleton
                variant="text"
                width="70%"
                height={20}
                animation="wave"
              />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Skeleton
                  variant="text"
                  width="30%"
                  height={25}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  width="20%"
                  height={25}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  width="20%"
                  height={25}
                  animation="wave"
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 1.5,
                  width: "100%",
                  mt: 2,
                }}
              >
                <Skeleton
                  variant="rectangular"
                  width="50%"
                  height={40}
                  animation="wave"
                  sx={{ borderRadius: 1 }}
                />
                <Skeleton
                  variant="rectangular"
                  width="50%"
                  height={40}
                  animation="wave"
                  sx={{ borderRadius: 1 }}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardSkeleton;