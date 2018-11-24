module.exports = data => ({
  _index: data.id,
  address: data.address,
  price: data.price,
  body: data.body,
  subTitle: data.subtitle,
  details: {
    factsAndFeatures: {
      type: data.type,
      yearBuilt: data.yearbuilt,
      heating: data.heating,
      cooling: data.cooling,
      parking: data.parkingfacts,
      lot: data.lotfacts,
      daysOnZillow: data.daysonzillowfacts,
      pricePerSqft: data.pricepersqft,
      saves: data.saves,
    },
    interiorFeatures: {
      bedRoom: data.bedroom,
      bathRoom: data.bathroom,
      heatingAndCooling: data.heatingandcooling,
      basement: data.basement,
      flooring: data.flooring,
      other: data.otherinterior,
    },
    spacesAndMenities: {
      size: data.size,
      amenities: data.amenities,
      spaces: data.spaces,
    },
    construction: {
      typeAndStyle: data.typeandstyle,
      dates: {
        builtIn: data.builtin,
        remodel: data.remodel,
      },
      materials: {
        roof: data.roof,
        exterior: data.exterior,
      },
      other: data.otherconstruction,
    },
    exteriorFeatures: {
      lot: {
        lot: data.lot,
        lotWidth: data.lotwidth,
      },
      other: data.other,
    },
    parking: data.parking,
    other: {
      lastSold: {
        soldDate: data.solddate,
        soldPrice: data.soldprice,
      },
    },
    activityOnZillow: {
      daysOnZillow: data.daysonzillow,
      pastThirtydayView: data.pastthirtydayview,
      savedLog: data.savedlog,
    },
  },
});
