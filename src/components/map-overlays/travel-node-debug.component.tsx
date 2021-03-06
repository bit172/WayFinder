import React from "react";
import { StyleSheet } from "react-native";
import { Polyline } from "react-native-maps";

interface IProps {
  id: number;
}

const TravelNodeDebug = ({ id }: IProps) => {
  const floorPaths = [];
  let lines = [];
  floorPaths.forEach((floorPath) => {
    lines = lines.concat(floorPath.path);
  });
  return (
    <>
      {lines.map((line, index) => (
        <Polyline key={index} coordinates={line} />
      ))}
      {/* {buildingFloors
        .filter(buildingFloor => buildingFloor.id === id)
        .map(buildingFloor => (
          <>
            {PathFindingService.getInstance()
              .traverseNodes(buildingFloor.travelNodes)
              .map(line => (
                <>
                  <Polyline coordinates={line.map(edge => edge.location)} />
                </>
              ))}
            {PathFindingService.getInstance()
              .traverseNodes(buildingFloor.travelNodes)
              .map(line => (
                <>
                  <Marker coordinate={line[0].location}>
                    <Text>{line[0].id}</Text>
                  </Marker>
                  <Marker coordinate={line[1].location}>
                    <Text>{line[1].id}</Text>
                  </Marker>
                </>
              ))}
          </>
        ))} */}
    </>
  );
};

export default TravelNodeDebug;

const styles = StyleSheet.create({});
