import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const HomeSkeleton = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
    
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 4,
          py: 2,
          backgroundColor: "#1976d2",
        }}
      >
        <Skeleton
          variant="text"
          width={120}
          height={20}
          sx={{ bgcolor: "rgba(255,255,255,0.4)" }}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          width={400}
          height={30}
          sx={{ borderRadius: 1, bgcolor: "rgba(255,255,255,0.4)" }}
          animation="wave"
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Skeleton
            variant="circular"
            width={30}
            height={30}
            sx={{ bgcolor: "rgba(255,255,255,0.4)" }}
            animation="wave"
          />
          <Skeleton
            variant="circular"
            width={30}
            height={30}
            sx={{ bgcolor: "rgba(255,255,255,0.4)" }}
            animation="wave"
          />
          <Skeleton
            variant="circular"
            width={30}
            height={30}
            sx={{ bgcolor: "rgba(255,255,255,0.4)" }}
            animation="wave"
          />
        </Box>
      </Box>

      <Box sx={{ position: "relative", px: 3, mt: 2 }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height={550}
          animation="wave"
          sx={{ borderRadius: 2 }}
        />
      </Box>

      <Box sx={{ px: 30, py: 8 }}>
        <Grid container spacing={5} justifyContent="space-around">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Grid  key={item}>
              <Stack spacing={1} alignItems="center">
                <Skeleton
                  variant="rectangular"
                  width={130}
                  height={130}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  width={130}
                  height={35}
                  animation="wave"
                />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>

     
    </Box>
  );
};

export default HomeSkeleton;