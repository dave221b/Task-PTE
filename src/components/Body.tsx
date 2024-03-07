import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

export const Body = () => {
  const items = [
    {
      right: false,
      value:
        "Whatever the reason, thousands of students each year make their dream of university education cpome true.",
      order: 1,
    },
    {
      right: false,
      value: "Some People go overseas because they love to travel",
      order: 2,
    },
    {
      right: false,
      value:
        "They may choose a university because of it's interesting courses or perhaps because they like the country and it's language",
      order: 3,
    },
    {
      right: false,
      value:
        "They don't all have the same reasons for going or for choosing a particular place to study.",
      order: 4,
    },
    {
      right: false,
      value:
        "All over the world students are changing countries for their university studies",
      order: 5,
    },
  ];

  //   useEffect(() => {
  //     const [newLeft, newRight] = useMemo(() => {
  //         const tempLeft = items.filter(item => !item.right)
  //         const tempRight = items.filter(item => item.right)

  //         return [tempLeft,tempRight]
  //     },[items]);

  //     setLeft([...newLeft]);
  //     setRight([...newRight])
  //   },[])

  const newItems = items.map((item) => {
    return {
      ...item,
      originalOrder: item.order,
    };
  });

  const [left, setLeft] = useState([...newItems]);
  const [right, setRight] = useState<typeof left>([]);
  const [dragItem, setDragItem] = useState<number>();
  const [dropItem, setDropItem] = useState<string>("");

  const setOrderInSequence = (arr: typeof items) => {
    return arr.map((item: any, index: number) => {
      return {
        ...item,
        order: index,
      };
    });
  };

  const onRightEnter = (e: any) => {
    if (dropItem.startsWith("right")) {
      const newLeft = left.filter((item) => item.order !== dragItem);
      const newRight = left.filter((item) => item.order === dragItem);

      const tempRight = setOrderInSequence([...right, ...newRight]);

      setRight([...tempRight]);
      setLeft([...newLeft]);
    }
  };

  const reArrangeRight = () => {
    const dropItemOrder = Number(dropItem.charAt(dropItem.length - 1));
    const newRight = right.map((item) => {
      if (item.order === dragItem) {
        return {
          ...item,
          order: dropItemOrder,
        };
      } else if (item.order < dropItemOrder) {
        return { ...item };
      } else {
        return {
          ...item,
          order: dropItemOrder + 1,
        };
      }
    });
    const tempRight = setOrderInSequence(
      newRight.sort((a, b) => a.order - b.order)
    );
    setRight([...tempRight]);
  };

  return (
    <Box
      sx={{
        margin: 5,
        display: "flex",
        flexDirection: "row",
        height: "45%",
        justifyContent: "space-between",
      }}
    >
      <Box
        id="left"
        onDragEnter={(e) => setDropItem(e.currentTarget.id)}
        sx={{
          width: "40%",
          display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          flexDirection: "column",
          border: "1px solid black",
        }}
      >
        <Box sx={{ height: "15%", width: "100%", background: "#777c7d" }}>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Source
          </Typography>
        </Box>
        {left.map((item) => (
          <Box
            onDragStart={(e) => {
              setDragItem(
                Number(e.currentTarget.id.charAt(e.currentTarget.id.length - 1))
              );
            }}
            onDragEnter={(e) => {
              console.log("enter", e.currentTarget.id);
              setDropItem(e.currentTarget.id);
            }}
            onDragEnd={(e) => onRightEnter(e)}
            id={`left${item.order}`}
            draggable
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "15%",
              width: "90%",
              mx: 2,
              my: 0.5,
              pl: 2,
              border: "1px solid black",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.value}
            </Typography>
            <Box
              sx={{
                width: "3%",
                height: "100%",
                display: "flex",
                alignItems: "end",
              }}
            >
              <Box sx={{ background: "black", width: "100%" }}>
                <Typography
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {item.originalOrder}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          width: "20%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ height: "15%", display: "flex", flexDirection: "column" }}>
          <IconButton onClick={() => {setRight(prev => [...prev, ...left]); setLeft([])}} sx={{ my: 1, background: "#26282b" }}>
            <ArrowForwardIos
              sx={{
                color: "white",
                '&:hover': {
                    color:'black'
                }
              }}
            />
          </IconButton>
          <IconButton onClick={() => {setLeft(prev => [...prev, ...right]); setRight([])}} sx={{ background: "#777c7d" }}>
            <ArrowBackIos
              sx={{
                color: "white",
                '&:hover': {
                    color:'black'
                }
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box
        id="right"
        onDragEnd={(e) => {
          e.stopPropagation();
        }}
        onDragEnter={(e) => setDropItem(e.currentTarget.id)}
        sx={{
          width: "40%",
          display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          flexDirection: "column",
          border: "1px solid black",
        }}
      >
        <Box sx={{ height: "15%", width: "100%", background: "#26282b" }}>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Target
          </Typography>
        </Box>
        {right.map((item) => (
          <Box
            onDragStart={(e: any) => {
              setDragItem(
                Number(e.currentTarget.id.charAt(e.currentTarget.id.length - 1))
              );
            }}
            onDragEnter={(e: any) => {
              e.stopPropagation();
              setDropItem(e.currentTarget.id);
            }}
            onDragEnd={() => reArrangeRight()}
            draggable
            id={`right${item.order}`}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "15%",
              width: "90%",
              mx: 2,
              my: 0.5,
              pl: 2,
              border: "1px solid black",
              transition:'all 1s ease-in'
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.value}
            </Typography>
            <Box
              sx={{
                width: "3%",
                height: "100%",
                display: "flex",
                alignItems: "end",
              }}
            >
              <Box sx={{ background: "black", width: "100%" }}>
                <Typography
                  sx={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {item.originalOrder}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
